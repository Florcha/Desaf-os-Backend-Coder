const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    /*res.send("Holi Coder's");*/
res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
    console.log("server runing on port", 3000);
});
