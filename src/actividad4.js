
// * Utilizando req.query y req.params, la query es lo que viene de la url despues del signo de pregunta

import express, { response } from 'express' // Version Module, ECMASCRIPT
const app = express()
const port = 3000


// * req.query
app.get('/buscar', (req, res) => {
    const query = req.query.a;
    res.send(`Buscando: ${query}`);
})

// * req.params
app.get('/consulta/:id', (req, res) => {
    const parametro = req.params.id;
    console.log('Dato capturado de la URL: ', parametro);
    res.send(`Parametro: ${parametro}`);
})

//http://localhost:3000/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})