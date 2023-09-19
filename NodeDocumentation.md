# Aprendiendo Node.js  🌱


## Tabla de Contenidos 📑

1. [ ¿Qué es Node.js?](#qué-es-nodejs)
2. [¿Por qué es Importante?](#por-qué-es-importante)
3. [Historia de Node.js](#historia-de-nodejs)
4. [Cómo Funciona](#cómo-funciona)
5. [Instalación de Node.js y NPM](#instalación-de-nodejs-y-npm)
6. [Tu Primer Programa en Node.js](#tu-primer-programa-en-nodejs)

---

## ¿Qué es Node.js? 🤷‍♀️

Node.js no es un lenguaje de programación ni un framework. Es un **entorno de ejecución de JavaScript**. Esto significa que Node.js nos permite ejecutar código JavaScript fuera del navegador. Sí, escuchaste bien: ¡JavaScript en el servidor!

---

## ¿Por qué es Importante? 🌟

Node.js es importante por varias razones:

- **JavaScript Universal**: Puedes usar el mismo lenguaje tanto en el cliente como en el servidor.
  
- **Rápido**: Utiliza el motor V8 de Google Chrome, que es increíblemente rápido y eficiente.
  
- **Escalable**: Es muy bueno para aplicaciones que requieren muchas conexiones simultáneas pero con poco uso de CPU.

---

## Historia de Node.js 📚

Node.js fue creado en 2009 por Ryan Dahl. La idea era crear algo que pudiera manejar conexiones más eficientemente que las tecnologías anteriores, y nació Node.js, construido sobre el motor V8 de JavaScript de Google Chrome.

---

## Cómo Funciona 🛠️

En lugar de usar múltiples hilos para manejar múltiples conexiones, Node.js utiliza un **modelo de evento único**. Esto significa que todas las operaciones de entrada/salida (como leer desde la red, acceder a una base de datos, etc.) son ejecutadas de forma asíncrona.

Por ejemplo, si tienes un script que lee un archivo y al mismo tiempo quieres escribir en una base de datos, Node.js no te hace esperar a que se complete la lectura del archivo para comenzar a escribir en la base de datos. Todo se realiza de manera eficiente y rápida.

---

## Instalación de Node.js y NPM 🌐

### Paso 1: Descargar el Instalador

Ve al sitio web oficial de Node.js y descarga el instalador: [Node.js](https://nodejs.org/)

### Paso 2: Instalar

Ejecuta el instalador y sigue los pasos. Esto instalará tanto Node.js como NPM (Node Package Manager).

### Paso 3: Verificar Instalación

Para verificar que se ha instalado correctamente, abre una terminal y escribe:


    node -v
    npm -v



Si ves los números de versión, todo está listo.

---

## Tu Primer Programa en Node.js 🎉

Creemos un programa "Hola Mundo" para asegurarnos de que todo está funcionando correctamente.

1. Abre tu editor de código y crea un nuevo archivo llamado \`holaMundo.js\`.
  
2. Añade el siguiente código:

    ```bash
    console.log("¡Hola Mundo!");
    ```

3. Guarda el archivo.

4. Abre una terminal y navega hasta el directorio donde guardaste \`holaMundo.js\`.

5. Ejecuta el archivo escribiendo:

    ```bash
    node holaMundo.js
    ```

Si ves "¡Hola Mundo!" en la terminal, ¡felicidades! Has ejecutado tu primer programa en Node.js.

---

## ¿Qué es NPM? 📦

NPM (Node Package Manager) es el administrador de paquetes para Node.js. Es una herramienta esencial que te permite descargar y administrar bibliotecas y paquetes de terceros que puedes utilizar en tus proyectos de Node.js. También es increíblemente útil para manejar las dependencias de tu proyecto.

### ¿Por qué es Importante? 🌟

NPM es importante por varias razones:

- **Gestión de Paquetes**: Facilita la descarga e instalación de bibliotecas y herramientas que puedas necesitar.

- **Control de Versiones**: Puedes especificar qué versiones de un paquete necesitas, lo que garantiza que tu proyecto no se rompa cuando un paquete se actualiza.

- **Scripts y Automatización**: NPM te permite definir scripts que pueden hacer que el desarrollo sea más eficiente.

### Cómo Instalar un Paquete con NPM 🌐

1. Abre tu terminal.
  
2. Navega al directorio de tu proyecto de Node.js (o crea uno nuevo).

3. Ejecuta el siguiente comando para instalar un paquete (por ejemplo, `express`, un popular marco de aplicación web):

    ```bash
    npm install express
    ```


Esto descargará el paquete y lo añadirá a tu archivo `package.json`, que es como el acta de nacimiento de tu proyecto, donde se listan todas las dependencias.

### Tu Primer Paquete 🎉

Siguiendo el ejemplo anterior, puedes usar `express` para crear un servidor web sencillo en Node.js.

1. Crea un nuevo archivo llamado `app.js`.

2. Añade el siguiente código:

    ```javascript
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
      res.send('¡Hola Mundo con Express!');
    });

    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
    ```

3. Guarda el archivo y ejecuta:

    ```bash
    node app.js
    ```

4. Abre tu navegador y visita `http://localhost:3000`. Deberías ver el mensaje "¡Hola Mundo con Express!".

Con esto, has instalado tu primer paquete con NPM y has creado un servidor web sencillo con Express.

---

