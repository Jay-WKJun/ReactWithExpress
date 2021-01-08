const express = require('express');
const path = require("path");

const app = express();

const PORT = 4000;

app.use(express.static("bundle"));

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`)
});

const htmlPath = path.resolve(__dirname, "../", "client", "init.html");

app.use("/api", (req, res) => {
    //engine없이 순수 html을 그리고 싶다면 이렇게! render()사용하지 않아도 됨.
    //res.send("Hi!!!!! from server!!!!");
    //res.send("<p>Hello world!!!</p>");
    res.json({success:true});
})