const express = require('express')
const fs = require('fs')
const userRoutes = express.Router()

userRoutes.get('/users', (req, res) => {
    //task menerima request dari user, ke endpoint '/users harapan nya dari api yang dibuat akan meberikan response berupa data user, untuk kali ini daimbil dri fake_database.json
        fs.readFile('./db/users.json', 'utf-8',(error, data) => {
        if (error) res.send("terjadi kesalahan pada pembacaan file")
        //if (error) throw error
        res.send(JSON.parse(data))
        })
        //jika nnti mau ngirim database real maka perlu melakukan query ke database, misalnya kalau di mySql atau postgree yaitu dengan SELECT * FROM USERS
    })
    
    //get by id
    userRoutes.get('/users/:id', (req, res) => {
        console.log(req.params)
    //desturcturing an object
        const {id} = req.params
    //kita akan mengambil user pada database dengan user id = user id yang dikirimkan oleh user melalui request params
        fs.readFile('./db/users.json', 'utf-8', (error, data) => {
            if(error)res.send('gagal dalam pembacaan database')
            const users = JSON.parse(data)
        console.log(users)
    
        //filter data dari database, dan kita cari user dengan id sesuai dengan id yang dilempar req.params
        const user = users.find(user => user.id === Number(id))
        //error handling jika user tidak ada di database
        if (!user) res.send ("user tidak ditemukan")
        //melempar data user melalui response
        res.send(user)
        });
    })

module.exports = {userRoutes}