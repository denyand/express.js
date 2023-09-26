//buat import package express yang sudah di install
const express = require('express');
//buat instance express
const app = express();
const PORT = 3000;

app.get("/" , (req, res) => {
    res.send("<h1>Home Page</h1>");
}) 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});