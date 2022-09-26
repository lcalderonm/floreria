const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, '/dist/index.html')));
const port = process.env.PORT || 8080;
app.listen(port);
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})
console.log(`app is listeninjhg on port: ${port}`)