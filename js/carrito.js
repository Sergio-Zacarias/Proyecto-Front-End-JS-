import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarTarjetas = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  const contenedor = document.getElementById("contenedor-carrito");
  const accionesCarrito = document.getElementById("acciones-carrito");

  contenedor.innerHTML = "";
  accionesCarrito.innerHTML = "";

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("msj-carrito-vacio");
    mensaje.textContent = "El carrito esta vacio 😛";

    contenedor.appendChild(mensaje);
    return;
  }

  carrito.forEach((producto, indice) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    const imagen = document.createElement("img");
    imagen.alt = producto.nombre;
    imagen.src = `../${producto.nombreImagen}`;

    const tituloProducto = document.createElement("h3");
    tituloProducto.textContent = producto.nombre;

    const descripcionProducto = document.createElement("p");
    descripcionProducto.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${producto.precio}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn-productos");
    // btnEliminar.classList.add("btn-eliminar-producto");
    btnEliminar.textContent = "Eliminar producto";
    btnEliminar.addEventListener("click", () => {
      eliminarProducto(indice);
      renderizarTarjetas();
    });

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(tituloProducto);
    tarjeta.appendChild(descripcionProducto);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(btnEliminar);

    contenedor.appendChild(tarjeta);
  });

  const btnVaciar = document.createElement("button");
  btnVaciar.classList.add("btn-productos");
  btnVaciar.classList.add("btn-vaciar-carrito");
  btnVaciar.textContent = "Vaciar carrito";
  btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarTarjetas();
  });

  accionesCarrito.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarTarjetas();
});
