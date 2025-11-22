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
    .then((data) => {})
    .catch((err) => {
      console.log(err);
    });
});
