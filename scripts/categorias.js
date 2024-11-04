// categoria.js
import { Productos } from "./Datos.js";

const mostrarProductos = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoria = urlParams.get('categoria');

  const tituloCategoria = document.querySelector('.categoria-container--1 h1')

  tituloCategoria.innerHTML = `${categoria}`

  const categoriaProductos = document.querySelector('.categoria-container--3_productos-caja');
  const paginacion = document.querySelector('.categoria-paginacion')
  
  const filtrosProductos = Productos.filter(item => item.categoria === categoria);

  categoriaProductos.innerHTML = ''; // Limpiar contenedor antes de agregar productos

  if (filtrosProductos.length === 0) {
    // Si no hay productos en esta categoría, muestra el mensaje
    categoriaProductos.innerHTML = `
      <p class="mensaje-no-productos">En estos momentos no tenemos el producto que está buscando</p>
    `;

  } else {
    // Si hay productos, los mostramos
    filtrosProductos.forEach(({ id, titulo, precio, imagenPrincipal }) => {
      categoriaProductos.innerHTML += `
        <button data-producto="${id}" class="categoria-productos--item">
          <div class="categoria-productos--item_imagen">
            <img src="./img/productos/${imagenPrincipal}" alt="${titulo}" width="auto" height="100%">
          </div>
          <div class="categoria-productos--item_info">
            <h4>${titulo}</h4>
            <p>$${precio}</p>
          </div>
        </button>
      `;
    });

    paginacion.className = 'categoria-paginacion mostrar'

    const botones = categoriaProductos.querySelectorAll('button');
    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        const id = boton.getAttribute('data-producto');
        window.location.href = `./producto.html?id=${id}`;
        console.log(id)
      });
    });
  }
};

mostrarProductos();

// Actualiza el contador del carrito al cargar la página
function actualizarContadorCarrito() {
  const productosEnCarrito = JSON.parse(localStorage.getItem('productos')) || [];
  const contadorCarrito = document.querySelector('.cart-count');
  contadorCarrito.textContent = productosEnCarrito.length;
}

// Actualizando el carrito de compras
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);
