import {agregarAlCarrito, vaciarCarrito} from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = obtenerCarrito ();
    actualizarContador(carrito);

    fetch("./data/productos.json")
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
            
            img.src = `./imagenes/${producto.imagen}`;
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
            tarjeta.appendChild(tarjeta);

            contenedor.appendChild(tarjeta);
        });
        const btnVaciar = document.createElement("button");
        btnVaciar.classList.add("btn");
        btnVaciar.classList.add("btn-vaciar-carrito")
        btnVaciar.textContent = "vaciar carrito";
        btnVaciar.addEventListener("click", () => {
            vaciarCarrito();
            renderizarCarrito();
        });
        divAcciones.appendChild(btnVaciar)
    }) 
    .catch((error)  => console.error("Error al cargar los productos :", error));
    document.addEventListener("DOMContentLoaded", renderizarCarrito);
});