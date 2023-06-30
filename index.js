#!/usr/bin/env node

const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');

// Legge il nome del progetto dal primo argomento della riga di comando.
const projectName = process.argv[2];

// Crea una directory per il progetto con il nome specificato.
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

// Copia la cartella "template", che contiene il template del progetto,
// nella directory appena creata.
const templateDir = path.resolve(__dirname, 'template');
fs.cpSync(templateDir, projectDir, { recursive: true });

// Legge il file package.json del progetto.
const projectPackageJson = require(path.join(projectDir, 'package.json'));

// Aggiorna il nome del progetto nel file package.json.
projectPackageJson.name = projectName;

// Scrive il file package.json aggiornato.
fs.writeFileSync(
  path.join(projectDir, 'package.json'),
  JSON.stringify(projectPackageJson, null, 2)
);

console.log('\nSuccess! Your new project is ready.\n');
console.log(`Created ${projectName} at ${projectDir}`);
console.log(`cd ${projectDir} && npm install\n`);
console.log('Good Code!\n');
