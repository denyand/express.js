const express = require('express')

const productRoutes = express.Router()

productRoutes.get ("/", (req, res) => {
    res.send("response dri endpoint")
})

module.exports = { productRoutes}