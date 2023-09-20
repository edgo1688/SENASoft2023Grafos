# Sistema de Gestión de Contactos 📋

## Índice 📝

1. [Introducción](#introducción)
2. [Etapas](#etapas)
   - [Creación de la Lista Enlazada](#creación-de-la-lista-enlazada)
   - [Operaciones de Contactos](#operaciones-de-contactos)
   - [Búsqueda y Edición de Contactos](#búsqueda-y-edición-de-contactos)
   - [Funcionalidades Adicionales](#funcionalidades-adicionales)

---

## Introducción 🎉

En este ejercicio, trabajaremos en la implementación de un sistema de gestión de contactos utilizando una lista enlazada simple. Este sistema permitirá a los usuarios agregar, eliminar, buscar y editar contactos.

---

## Etapas 🛠️

### Creación de la Lista Enlazada 📦

En esta etapa, debemos crear una clase `Nodo` que represente un nodo de la lista enlazada. Cada nodo contendrá información sobre un contacto, como su nombre, número de teléfono y dirección de correo electrónico.

### Operaciones de Contactos 🔧

Una vez creada la lista enlazada, implementaremos una clase `ListaEnlazada` que contendrá métodos para realizar operaciones en los contactos:
   - `agregar_contacto(nombre, telefono, correo)`: Agrega un nuevo contacto a la lista.
   - `eliminar_contacto(nombre)`: Elimina un contacto de la lista según su nombre.
   - `mostrar_contactos()`: Muestra la lista de contactos actual.

### Búsqueda y Edición de Contactos 🔍✏️

En esta etapa adicional, puedes implementar las siguientes funciones para mejorar el sistema:
   - `buscar_contacto(nombre)`: Busca un contacto por nombre y muestra su información si existe.
   - `editar_contacto(nombre, nuevoTelefono, nuevoCorreo)`: Permite editar la información de un contacto existente.

### Funcionalidades Adicionales 🔄🗑️

#### Eliminación por Posición

Agrega una función `eliminar_por_posicion(posicion)` que permita eliminar un contacto de la lista enlazada en una posición específica.

---

Este ejercicio te ayudará a comprender y practicar la implementación y manipulación de una lista enlazada simple, una estructura de datos importante en programación. ¡Comencemos a gestionar contactos!
