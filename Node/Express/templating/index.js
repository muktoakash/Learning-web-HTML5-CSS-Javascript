const express = required('express');
const app = express();

app.get("/", (req, res) => {

})

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})
