// index.js

const express = require('express');
const app = express();
// const bodyParser = require("body-parser");

// const bootstrap = require('bootstrap');
const path = require('path');
const axios = require('axios');
// const httpProxy = require("express-http-proxy");



var slugify = require("slugify");
// slugify('some string', {
//   replacement: '-',  // replace spaces with replacement character, defaults to `-`
//   remove: undefined, // remove characters that match regex, defaults to `undefined`
//   lower: false,      // convert to lower case, defaults to `false`
//   strict: false,     // strip special characters except replacement, defaults to `false`
//   locale: 'vi',      // language code of the locale to use
//   trim: true         // trim leading and trailing replacement chars, defaults to `true`
// })

// app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, '/public')));

// const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/results', (req, res) => {

    const searchTerm = req.query.inputSearch;

    // / async function to handle API
    async function getMoviesData(searchTerm) {
        try {
            const config = { params: { q: searchTerm } };
            resp = await axios.get(`https://api.tvmaze.com/search/shows`, config)
            return resp.data;
        }
        catch (e) {
            console.log('Trouble getting Movies')
            return null;
        }
    }

    if (searchTerm) {
        try {
            result = getMoviesData(searchTerm);
            result.then((data) => {
                // console.log(data);
                res.render('results.ejs', { searchTerm, data });
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    else {
        res.render('results.ejs', { searchTerm: '', data: '' });
    }



})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})
