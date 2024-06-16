//const express = require('express') // Version Common JS
import express, { response } from 'express' // Version Module, ECMASCRIPT
const app = express()
const port = 3000


app.use(express.json()) //nos sirve para enviarda++ datos en formato json

app.post('/datos', (request, response) => {

    const datos = request.body;
    console.log('Datos enviados por nuestro cliente Thunder Client: ', datos);
    response.send(`Recibido: ${JSON.stringify(datos)}`);     
    
})

//http://localhost:3000/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})