import { Productos } from "./Datos.js";

const mostrarProducto = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const categoriaProducto = document.querySelector('.producto-container');
  
  const filtrosProductos = Productos.filter(item => item.id === parseInt(id));

  categoriaProducto.innerHTML = ''; // Limpiar contenedor antes de agregar productos

  if (filtrosProductos.length === 0) {
    // Si no hay productos en esta categoría, muestra el mensaje
    categoriaProducto.innerHTML = `
      <p class="mensaje-no-productos">Producto no encorntrado</p>
    `;

  } else {
    // Si hay productos, los mostramos
    filtrosProductos.forEach(({ id, titulo, precio, descripcion, imagenPrincipal }) => {
      categoriaProducto.innerHTML += `
        <div id="${id}" class="producto-container--info">
          <div class="info-producto">
            <h2>${titulo}</h2>
            <div class="producto-imagen">
              <!--<div class="img-producto">
                // <img src="./img/productos/computadoras/4.jpg" alt="Imagen del producto" width="80" height="80">
                // <img src="./img/productos/computadoras/4.jpg" alt="Imagen del producto" width="80" height="80">
                // <img src="./img/productos/computadoras/4.jpg" alt="Imagen del producto" width="80" height="80">
                // <img src="./img/productos/computadoras/4.jpg" alt="Imagen del producto" width="80" height="80">
              </div> -->
              <div class="img-principal">
                <img src="./img/productos/${imagenPrincipal}" alt="Imagen del producto" width="auto" height="100%">
              </div>
            </div>
          </div>
          <div class="producto-container--2">
            <div class="precio">
              <h4>$${precio}</h4>
            </div>
            <div class="formasPago">
              <h4>Formas de pago</h4>
              <img src="./img/formasPagos.jpg" alt="Formas de pagos" width="200">
            </div>
            <div class="formasEnvio">
              <img src="./img/icons/camion.svg" alt="icono de un camion" width="30" height="30">
              Formas de envio
            </div>
            <form class="agregarProducto">
              <input type="number" value="1" min="1" max="4"></input>
              <button class="btn-agregarProducto">Agregar al carrito</button>
            </div>
          </div>
        </div>
        <div class="producto-descripcion">
          <div>
            ${descripcion}
          </div>
        </div>
      `;
    });
  }

  const agregarProducto = document.querySelector('.agregarProducto');

  agregarProducto.addEventListener('submit', (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    // Filtramos el producto con el ID correspondiente
    const producto = Productos.find(item => item.id === parseInt(id));
  
    if (producto) {
      const productoAgregado = {
        id: producto.id,
        titulo: producto.titulo,
        precio: producto.precio,
        img: producto.imagenPrincipal
      };
  
      // Obtenemos los productos ya almacenados en localStorage
      let productosEnCarrito = JSON.parse(localStorage.getItem('productos')) || [];
  
      // Agregamos el nuevo producto al array
      productosEnCarrito.push(productoAgregado);
  
      // Guardamos el array actualizado en localStorage
      localStorage.setItem('productos', JSON.stringify(productosEnCarrito));

      actualizarContadorCarrito();
    }
  });  
}

mostrarProducto()

// Actualiza el contador del carrito al cargar la página
function actualizarContadorCarrito() {
  const productosEnCarrito = JSON.parse(localStorage.getItem('productos')) || [];
  const contadorCarrito = document.querySelector('.cart-count');
  contadorCarrito.textContent = productosEnCarrito.length;
}

// Actualizando el carrito de compras
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);