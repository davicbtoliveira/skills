#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const os = require('os');

const LOCAL_DIR = path.join(os.homedir(), '.agents', 'skills');
const PACKAGE_DIR = path.join(__dirname, 'skills');

const args = process.argv.slice(2);
const isForce = args.includes('--force');
const isDryRun = args.includes('--dry-run');

function getSkillNames(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f =>
    fs.statSync(path.join(dir, f)).isDirectory()
  ).sort();
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

function formatBytes(dir) {
  let total = 0;
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, entry.name);
      if (entry.isDirectory()) walk(p);
      else total += fs.statSync(p).size;
    }
  }
  walk(dir);
  if (total < 1024) return `${total} B`;
  if (total < 1024 * 1024) return `${(total / 1024).toFixed(1)} KB`;
  return `${(total / (1024 * 1024)).toFixed(1)} MB`;
}

async function promptSkill(name, rl) {
  return new Promise(resolve => {
    rl.question(`  Overwrite "${name}"? [y/N/a] `, ans => {
      const a = ans.trim().toLowerCase();
      if (a === 'y') resolve('yes');
      if (a === 'a') resolve('all');
      resolve('no');
    });
  });
}

function showTree(localNames, packageNames) {
  const allNames = [...new Set([...localNames, ...packageNames])].sort();
  console.log('\n  ~/.agents/skills/');
  for (let i = 0; i < allNames.length; i++) {
    const isLast = i === allNames.length - 1;
    const prefix = isLast ? '  └── ' : '  ├── ';
    const inPkg = packageNames.includes(allNames[i]);
    const inLocal = localNames.includes(allNames[i]);
    let tag = '';
    if (inPkg && !inLocal) tag = '  (new)';
    else if (inPkg && inLocal) tag = '  (updated)';
    console.log(`${prefix}${allNames[i]}/${tag}`);
  }
  const pkgCount = packageNames.length;
  const localCount = localNames.length;
  const userOnly = localNames.filter(n => !packageNames.includes(n)).length;
  console.log(`\n  ${pkgCount} skills from package, ${userOnly} local-only skills kept`);
}

async function main() {
  const packageNames = getSkillNames(PACKAGE_DIR);
  const localNames = getSkillNames(LOCAL_DIR);

  if (packageNames.length === 0) {
    console.error('Error: No skills found in package.');
    process.exit(1);
  }

  if (isDryRun) {
    console.log('Skills install — dry run (no changes written)');
    showTree(localNames, packageNames);
    return;
  }

  if (!fs.existsSync(LOCAL_DIR)) {
    fs.mkdirSync(LOCAL_DIR, { recursive: true });
  }

  let overwriteAll = isForce;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  let copied = 0;
  let skipped = 0;
  let updated = 0;

  for (const name of packageNames) {
    const src = path.join(PACKAGE_DIR, name);
    const dest = path.join(LOCAL_DIR, name);
    const exists = fs.existsSync(dest);

    if (!exists) {
      copyDir(src, dest);
      copied++;
      continue;
    }

    if (overwriteAll) {
      copyDir(src, dest);
      updated++;
      continue;
    }

    const ans = await promptSkill(name, rl);
    if (ans === 'all') {
      overwriteAll = true;
      copyDir(src, dest);
      updated++;
    } else if (ans === 'yes') {
      copyDir(src, dest);
      updated++;
    } else {
      skipped++;
    }
  }

  rl.close();

  const lines = [];
  if (copied > 0) lines.push(`${copied} skill(s) installed`);
  if (updated > 0) lines.push(`${updated} skill(s) updated`);
  if (skipped > 0) lines.push(`${skipped} skill(s) skipped`);
  console.log(`\nDone. ${lines.join(', ')}.`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
