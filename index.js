const express = require('express');
//buat instance express

//buat baca db fake
const fs = require('fs')
const app = express();
const PORT = 3000;


app.use(express.static('public'))
app.get("/" , (req, res) => {

}) 

app.get('/users', (req, res) => {
//task menerima request dari user, ke endpoint '/users harapan nya dari api yang dibuat akan meberikan response berupa data user, untuk kali ini daimbil dri fake_database.json
    fs.readFile('./db/fake_database.json', 'utf-8',(error, data) => {
    if (error) res.send("terjadi kesalahan pada pembacaan file")
    //if (error) throw error
    res.send(JSON.parse(data))
    })
    //jika nnti mau ngirim database real maka perlu melakukan query ke database, misalnya kalau di mySql atau postgree yaitu dengan SELECT * FROM USERS
})

//get by id
app.get('/users/:userid', (req, res) =>{
    console.log(req.params)
//desturcturing an object
    const {userid, name} = req.params.id
})
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});