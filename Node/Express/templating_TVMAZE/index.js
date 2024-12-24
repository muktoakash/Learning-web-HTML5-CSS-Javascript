// index.js

const express = require('express');
const app = express();

// const bootstrap = require('bootstrap');
const path = require('path');

var slugify = require("slugify");
// slugify('some string', {
//   replacement: '-',  // replace spaces with replacement character, defaults to `-`
//   remove: undefined, // remove characters that match regex, defaults to `undefined`
//   lower: false,      // convert to lower case, defaults to `false`
//   strict: false,     // strip special characters except replacement, defaults to `false`
//   locale: 'vi',      // language code of the locale to use
//   trim: true         // trim leading and trailing replacement chars, defaults to `true`
// })

app.use(express.static(path.join(__dirname, '/public')));

// const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/results', (req, res) => {
    console.log('Request successful!');
    res.render('results.ejs');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})
