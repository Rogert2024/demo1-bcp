// =======================================
// BANCO DIGITAL DEMO
// script.js
// =======================================


// =======================================
// SIMULADOR DE PRÉSTAMOS
// =======================================

function calcularPrestamo() {

    const monto = parseFloat(document.getElementById("monto").value);

    const plazo = parseInt(document.getElementById("plazo").value);

    const resultado = document.getElementById("resultado");


    if (isNaN(monto) || monto <= 0) {

        resultado.innerHTML = "Ingrese un monto válido.";

        resultado.style.color = "red";

        return;

    }


    const tasaAnual = 0.12;

    const interes = monto * tasaAnual * (plazo / 12);

    const total = monto + interes;

    const cuota = total / plazo;


    resultado.style.color = "#003B8E";

    resultado.innerHTML = `

        <br>

        <strong>Resumen del préstamo</strong>

        <br><br>

        Monto solicitado:
        <strong>S/ ${monto.toFixed(2)}</strong>

        <br>

        Plazo:
        <strong>${plazo} meses</strong>

        <br>

        Tasa anual:
        <strong>12%</strong>

        <br>

        Interés:
        <strong>S/ ${interes.toFixed(2)}</strong>

        <br>

        Total a pagar:
        <strong>S/ ${total.toFixed(2)}</strong>

        <br>

        Cuota mensual:
        <strong>S/ ${cuota.toFixed(2)}</strong>

    `;

}



// =======================================
// TRANSFERENCIA
// =======================================

function transferir() {

    const destino =
        document.getElementById("destino").value;

    const monto =
        document.getElementById("montoTransferencia").value;

    const mensaje =
        document.getElementById("mensajeTransferencia");


    if(destino==="" || monto===""){

        mensaje.style.color="red";

        mensaje.innerHTML="Complete todos los campos.";

        return;

    }

    mensaje.style.color="green";

    mensaje.innerHTML=`

        Transferencia realizada correctamente.

        <br><br>

        Cuenta destino:
        <strong>${destino}</strong>

        <br>

        Monto transferido:
        <strong>S/ ${parseFloat(monto).toFixed(2)}</strong>

    `;

}



// =======================================
// MENSAJE DE BIENVENIDA
// =======================================

window.onload=function(){

    console.log("Banco Digital del BCP - GRUPO 1.");

}
