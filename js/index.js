import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  fetch("./data/productos.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error HTTP status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        const imagen = document.createElement("img");
        imagen.alt = producto.nombre;
        imagen.src = `./${producto.nombreImagen}`;

        const tituloProducto = document.createElement("h3");
        tituloProducto.textContent = producto.nombre;

        const descripcionProducto = document.createElement("p");
        descripcionProducto.textContent = producto.descripcion;

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${producto.precio}`;

        const botonProducto = document.createElement("button");
        botonProducto.classList.add("btn-productos");
        botonProducto.textContent = "Agregar al carrito";
        botonProducto.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(tituloProducto);
        tarjeta.appendChild(descripcionProducto);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(botonProducto);

        contenedor.appendChild(tarjeta);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
