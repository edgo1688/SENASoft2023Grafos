const express = require('express');
const app = express();


function inicializarPuntuaciones() {
    return [87, 94, 76, 89, 92];
}


function agregarPuntuacion(puntuaciones, nuevaPuntuacion) {
    puntuaciones.push(nuevaPuntuacion);
}


function ordenarPuntuaciones(puntuaciones) {
    puntuaciones.sort((a, b) => b - a);
}


function generarReportePuntuaciones(puntuaciones) {
    let reporte = "Puntuaciones Altas:";
    puntuaciones.forEach((p, index) => {
        reporte += `\nPosición ${index + 1}: ${p}`;
    });
    console.log(reporte);
}


// EX----
// Inicializar puntuaciones
const puntuaciones = inicializarPuntuaciones();

// Agregar nueva puntuación
agregarPuntuacion(puntuaciones, 95);

// Ordenar puntuaciones
ordenarPuntuaciones(puntuaciones);

// Generar reporte
generarReportePuntuaciones(puntuaciones);

app.get('/puntuaciones', (req, res) => {
    res.send(generarReportePuntuaciones(puntuaciones));
});

/*app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});*/