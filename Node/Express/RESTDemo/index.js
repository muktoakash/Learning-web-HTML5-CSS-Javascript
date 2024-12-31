const express = require('express');
const app = express();

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})
app.listen(3000, () = {
    console.log("ON PORT 3000!");
})
