// Node/Express/express_boilerplate.js
/* Boilerplate to create files to start an npm-express-ejs project.
Uses common naming conventions
Creates a folder, and files, as usual.*/

const fs = require('fs');

try {
    fs.mkdirSync('public');
    fs.mkdirSync('views');
    fs.mkdirSync('views/partials');
    fs.writeFileSync(`index.js`, '')
    fs.writeFileSync(`views/home.ejs`, '')
    fs.writeFileSync(`views/partials/head.ejs`, '')
    fs.writeFileSync(`views/partials/foot.ejs`, '')
}
catch (e) {
    console.log(e);
}
