
// * utilizando req.status 

import express, { response } from 'express' // Version Module, ECMASCRIPT
const app = express()
const port = 3000


app.get('/no-encontrado', (req, res) => {
    res.status(404).send('Página no encontrada')   
})

app.get('/exito', (req, res) => {
    res.status(200).send('Operación exitosa')
})

app.get('/error-server', (req, res) => {
    res.status(500).send('Error interno en el servidor')
})


//http://localhost:3000/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})