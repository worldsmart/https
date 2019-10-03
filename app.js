const express = require('express');
const path = require('path');

let app = express();

app.use('/.well-known/acme-challenge/', express.static(path.join(__dirname, 'vert')));

app.listen(80, _=>{
    console.log('server started');
});