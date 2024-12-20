// Node/boilerplate.js
/* Boilerplate to create files to start a web-project.
Takes the project name as a command-line argument.
Creates a folder, and within it html, css, and js files
with the same name as the argument. */

const projectName = process.argv[2] || 'Project';
const fs = require('fs');

try {
    fs.mkdirSync(projectName);
    fs.writeFileSync(`${projectName}/${projectName}.html`, '')
    fs.writeFileSync(`${projectName}/${projectName}.css`, '')
    fs.writeFileSync(`${projectName}/${projectName}.js`, '')
}
catch (e) {
    console.log(e);
}
