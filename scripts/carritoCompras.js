let productos = JSON.parse(localStorage.getItem('productos'));
const carrito = document.getElementById('carrito')
// const precioFinal = document.getElementsByClassName('precioTotal')

if (productos.length > 0) {
  // Mostrar carrito con los productos y sus cantidades
  const carritoHTML = `
    <div class="carrito-compras--lleno">
      <h4>Descripcion del pedido:</h4>
      <div class="carrito-compras--lleno_pedido">
        <table>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
          <tbody class="productos-info">
            ${productos.map(({id,titulo,precio,img}) => {
                return `
                  <tr>
                    <td class="producto" id="${id}">
                      <img src="./img/productos/${img}" alt="Producto 1" width="60" height="60">
                      <p>${titulo}</p>
                    </td>
                    <td>$${precio}</td>
                    <td>1</td>
                    <td>$${precio}</td>
                    <td class="btn-eliminar"><button data-id=${id}>Eliminar</button></td>
                  </tr>
                `;
                }).join('')
              }
          </tbody>

        </table>
        <div class="confirmarPedido">
          <div class="confirmarPedido-info">

          </div>
          <button id="btn-confirmarPedido">Confirmar Compra</button>
        </div>
      </div>
    </div>
  `

  carrito.innerHTML = carritoHTML;
}


// Precio final 

const precioTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)

const precioFinal = document.querySelector('.confirmarPedido-info')

precioFinal.innerHTML = `
  <p class="precioTotal">Total a pagar: $${precioTotal}</p>
  <p>Envío gratis</p>
  <p>Descuento en cupones: $0.00</p>
`
// const btnEliminar = document.querySelector('.btn-eliminar')

// const botonEliminar = btnEliminar.querySelectorAll('button');
// botonEliminar.forEach(boton => {
//   boton.addEventListener('click', () => {
//     let productosArray = JSON.parse(localStorage.getItem('productos'))

//     const id = boton.getAttribute('data-id');

//     let productosenArray = productosArray.findIndex(producto => producto.id === id);

//     productosenArray.splice(productosenArray, 1)

//     // Guardar el array actualizado en localStorage
//     localStorage.setItem('productos', productosArray);
//   });
// });

document.querySelector('#btn-confirmarPedido').addEventListener('click', () => {
  window.location.href = './confirm.html'
})

// Actualiza el contador del carrito al cargar la página
function actualizarContadorCarrito() {
  const productosEnCarrito = JSON.parse(localStorage.getItem('productos')) || [];
  const contadorCarrito = document.querySelector('.cart-count');
  contadorCarrito.textContent = productosEnCarrito.length;
}

// Actualizando el carrito de compras
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);