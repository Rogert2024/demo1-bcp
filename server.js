const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Demo de Préstamos - BCP</h1>
        <p>GRUPO 1 - GESTIÓN DE DATA CENTER.</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});
