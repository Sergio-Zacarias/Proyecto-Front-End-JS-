import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

export { actualizarContador } from "./ui.js";
export { obtenerCarrito } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
});
