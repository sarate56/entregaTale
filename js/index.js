import {agregarAlCarrito} from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";
import { renderizarCarrito} from "./carrito.js";
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = obtenerCarrito ();
    actualizarContador(carrito);

    fetch("./data/configuracion.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error('Error HTTP status: ${res.status}' );
        }
        return res.json();
    })
    .then((data) => {
        data.forEach((producto) => {
            const tarjeta =document.createElement("article");
            tarjeta.classList.add("tarjeta-producto");

            const img = document.createElement("img");
            
            img.src = producto.img;
            img.alt = producto.nombre;
            
            const titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;
            const precio = document.createElement("p");
            
            precio.textContent = `$${producto.precio}`;
            const boton = document.createElement("button");
            boton.classList.add("btn");
            
            boton.textContent = "Agregar Al Carrito";
            boton.addEventListener("click", () => {

                agregarAlCarrito(producto);

            } );
            tarjeta.appendChild(img);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(boton);
            

            contenedor.appendChild(tarjeta);
        });
       
    }) 
    .catch((error)  => console.error("Error al cargar los productos :", error));
    
});