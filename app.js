const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('¡Hola Mundo con Express!');
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});