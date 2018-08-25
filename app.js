var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send("Kek World");
});

app.listen(4000, () => {
    console.log('Running on port 4000')
});