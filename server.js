const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Demo PaaS - BCP</title>

    <style>
        body{
            margin:0;
            font-family:Arial, Helvetica, sans-serif;
            background:linear-gradient(135deg,#0057B8,#0099FF);
            color:white;
        }

        header{
            background:#003B80;
            padding:20px;
            text-align:center;
            font-size:30px;
            font-weight:bold;
        }

        .contenedor{
            width:80%;
            margin:auto;
            margin-top:40px;
            background:white;
            color:#333;
            border-radius:12px;
            padding:35px;
            box-shadow:0 5px 20px rgba(0,0,0,.3);
        }

        h1{
            color:#0057B8;
        }

        h2{
            color:#0057B8;
        }

        p{
            line-height:1.7;
            font-size:18px;
        }

        ul{
            font-size:17px;
            line-height:1.8;
        }

        .boton{
            display:inline-block;
            margin-top:20px;
            padding:12px 25px;
            background:#0057B8;
            color:white;
            text-decoration:none;
            border-radius:8px;
            font-weight:bold;
        }

        .footer{
            margin-top:40px;
            text-align:center;
            color:#666;
            font-size:14px;
        }
    </style>

</head>

<body>

<header>
    BCP - Plataforma de Préstamos
</header>

<div class="contenedor">

    <h1>Demostración de una aplicación desplegada en PaaS</h1>

    <p>
        Esta aplicación fue desarrollada utilizando
        <strong>Node.js</strong> y <strong>Express</strong>,
        y fue desplegada sobre un servicio de
        <strong>Platform as a Service (PaaS)</strong>.
    </p>

    <h2>¿Qué demuestra esta aplicación?</h2>

    <ul>
        <li>✔ Despliegue automático desde un repositorio Git.</li>
        <li>✔ No fue necesario instalar ni configurar servidores.</li>
        <li>✔ El proveedor administra el sistema operativo y la infraestructura.</li>
        <li>✔ El desarrollador únicamente escribe el código de la aplicación.</li>
        <li>✔ La aplicación queda disponible en Internet mediante una URL.</li>
    </ul>

    <h2>Tecnologías utilizadas</h2>

    <ul>
        <li>Render (PaaS)</li>
    </ul>

    <a href="#" class="boton">
        Ver más información
    </a>

    <div class="footer">
        Universidad Tecnológica del Perú<br>
        Gestión de Data Center - Grupo1
    </div>

</div>

</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});
