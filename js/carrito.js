import {obtenerCarrito} from "./storage.js";

import {eliminarProducto, vaciarCarrito} from "./funcionesCarrito.js"
import {actualizarContador} from "./ui.js";

const rederizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");
    
    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";
    
    if (carrito.length === 0) {
        contenedor.textContent = "No hay productos en el carrito.";
        return
    }
    carrito.forEach((producto, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto")
        const img = document.createElement("img");
        img.src = '../${producto.imagen}'; 
        img.alt = producto.nombre;
        const titulo =document.createElement("h3");
        titulo.textContent = producto.nombre;
        const precio = document.createElement("p");
        precio.textContent = "$" + producto.precio;
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = () => {
            eliminarProducto(indice);
            renderizarCarrito();
        }

    });
}