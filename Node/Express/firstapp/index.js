const firstapp = require('express');
const app = express();

// app.use((req, res) = {

// })

app.get('/', (req, res) => {
    res.send("This is the homepage");

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

app.listen(8080, () = {

})
