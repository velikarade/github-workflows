const express = require("express");

const PORT = process.env.PORT || 5500;

let app = express();


app.use(express.static('frontend'));


app.listen(PORT, () => {
    console.log("server auf Port $(PORT)")
});