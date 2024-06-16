//const express = require('express') // Version Common JS
import express from 'express' // Version Module, ECMASCRIPT
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
//http://localhost:3000/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})