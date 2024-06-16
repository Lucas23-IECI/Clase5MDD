import express from 'express';

const app = express();
const port = 3000

app.get('/', (request, response) => {
    response.send('Esta es la ruta raiz')
})

app.get('/ruta', (request, response) => {
    response.send('Esta es una ruta basica de express 1')
})

app.get('/ruta-nueva', (request, response) => {
    response.send('Esta es una ruta basica de express 2')
})

app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`)
})