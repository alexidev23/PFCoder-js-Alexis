import { actualizarContadorCarrito } from "../main.js"

let productos = JSON.parse(localStorage.getItem('carrito')) || []
const carrito = document.getElementById('carrito')

const renderizarCarrito = () => {
  if (productos.length > 0) {
    const carritoHTML = `
      <div class="carrito-compras--lleno">
        <h4>Descripcion del pedido:</h4>
        <div class="carrito-compras--lleno_pedido">
          <table>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
            <tbody class="productos-info">
              ${productos.map(({ id, titulo, precio, img, cantidad }) => `
                <tr>
                  <td class="producto" id="${id}">
                    <img src="./img/productos/${img}" alt="${titulo}" width="80" height="80">
                    <p>${titulo}</p>
                  </td>
                  <td>${cantidad}</td>
                  <td>$${precio * cantidad}</td>
                  <td class="btn-eliminar"><button data-id="${id}"><img src="./img/icons/trash-icon.svg" alt="Icono de basura"></button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="confirmarPedido">
            <div class="confirmarPedido-info"></div>
            <button id="btn-confirmarPedido">Confirmar Compra</button>
          </div>
        </div>
      </div>
    `;
    carrito.innerHTML = carritoHTML

    actualizarPrecioTotal()
    btnEliminar()
  } else {
    // Si no hay nada en el carrito que se muestre la siguiente informacion
    carrito.innerHTML = `
      <div class="carrito-compras--vacio">
        <p>El carrito de compras esta vacío.</p>
        <p>Puedes agregar productos desde el botón añadir en el catálogo.</p>
      </div>
      <div class="carrito-compras--vacio_boton">
        <a href="./index.html" rel="noopener noreferrer">Continuar</a>
      </div>
    `
  }
}

// Función para calcular y actualizar el precio total
const actualizarPrecioTotal = () => {
  const precioTotal = productos.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0)
  const precioFinal = document.querySelector('.confirmarPedido-info')
  precioFinal.innerHTML = `
    <p class="precioTotal">Total a pagar: $${precioTotal}</p>
    <p>Envío gratis</p>
    <p>Descuento en cupones: $0.00</p>
  `
}

// Función para el boton eliminar
const btnEliminar = () => {
  const botonesEliminar = document.querySelectorAll('.btn-eliminar button')
  botonesEliminar.forEach(boton => {
    boton.addEventListener('click', () => {
      // Pasamos el id a numero
      const id = parseInt(boton.getAttribute('data-id'))
      productos = productos.filter(producto => producto.id !== id)

      localStorage.setItem('carrito', JSON.stringify(productos))

      // Se vuelve a renderizar el carrito y actualizar el contador
      renderizarCarrito()
      actualizarContadorCarrito()
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarCarrito()
  actualizarContadorCarrito()
})

// Función para confirmar el pedido
document.addEventListener('click', (e) => {
  if (e.target.id === 'btn-confirmarPedido') {
    window.location.href = './confirmar-pedido.html';
  }
})
