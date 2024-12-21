const express = require("express");
const app = express();

// app.use((req, res) = {

// })

app.get('/', (req, res) => {
    res.send("This is the homepage");

})

app.get('/part/:pathway', (req, res) => {
    const { pathway } = req.params;
    res.send(`<h1>Now browsing the path ${pathway}</h1>`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("<h1>Nothing found if nothing searched</h1>");
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})
app.post('/', (req, res) => {
    res.send("This was a homepage post req");
})

app.get('*', (req, res) => {
    res.send("This path I do not know");
})

app.post('*', (req, res) => {
    res.send("post req sent to unknown path");

})

app.listen(8080, () => {
    console.log("Listening on port 8080");

})
