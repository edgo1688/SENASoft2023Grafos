const express = require('express');
const app = express();

function crearInventario() {
    return [
        { nombre: "Zelda", cantidad: 10 },
        { nombre: "Mario", cantidad: 20 },
        { nombre: "Minecraft", cantidad: 15 },
        { nombre: "Overwatch", cantidad: 35 },
    ]
}

//se consulta el inventario completo
const inventario = crearInventario();
console.log("inventario completo: ");
console.log(inventario);


function modificarInventario(inventario, indice, nuevaCantidad, nuevoNombre) {
    if (indice => 0 && indice < inventario.length) {
        inventario[indice].cantidad = nuevaCantidad;
        inventario[indice].nombre = nuevoNombre;
    } else {
        console.log("Indice esta fuera de rango");
    }
}



modificarInventario(inventario, 1, 5, "Carlos");
console.log("inventario despues de modificado");
console.log(inventario);


function generarReporteshtml(inventario) {
    let reporteHTML = '<h1>Reporte de Inventario</h1><ul>';

    inventario.forEach(itemInventory => {
        reporteHTML += `<li> Nombre del Juego: ${itemInventory.nombre}, Cantidad: ${itemInventory.cantidad} </li> `;
    });
    reporteHTML += '</ul>';
    return reporteHTML;
}


app.get('/', (req, res) => {
    res.send(generarReporteshtml(inventario));
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});