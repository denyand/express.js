const express = require('express');
//buat instance express

//buat baca db fake
const fs = require('fs')

const {userRoutes} = require('./routes/userRoutes')
const {productRoutes} = require('./routes/productRoutes')
const pathTopublicFolder = __dirname + 'public'
const app = express();
const PORT = 3000;

//merupakan function middleware yang dibuat oleh express yg membantu kita dalam memudahkan serving static files
app.use(express.static('public'))


app.get("/" , (req, res) => { 
    res.send("haloo semua")
}) 

app.get('/about', (req, res) => {
console.log(__dirname)
res.sendFile('./public/about.html', { root:
__dirname})
})

//CRUD
//memecah rute rute yang banyak menjadi kecil
//kita bisa langsung pakai rute yang sudah dibuat di file lain dengan cara di import dulu, lalu kita pakai dengan app.use(namaRuteYangDiImpor)
app.use(userRoutes)

//untuk memakai productRoutes
app.use("/products", productRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});