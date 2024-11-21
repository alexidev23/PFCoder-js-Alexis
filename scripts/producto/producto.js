import { userData, actualizarContadorCarrito } from '../main.js'

// Función para obtener y mostrar el producto
const obtenerProducto = async () => {
  const URL = '../../productos.json'
  try {
    const response = await fetch(URL)
    const producto = await response.json()
    mostrarProducto(producto)
  } catch (error) {
    console.error('Error:', error)
  }
}

const mostrarProducto = (producto) => {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  
  const loader = document.querySelector('.loader')

  const categoriaProducto = document.querySelector('.producto')
  
  // Filtramos el producto por su ID
  const filtrosProductos = producto.filter(item => item.id === parseInt(id))

  // Si no hay productos, mostramos un mensaje
  setTimeout(()=> {
    loader.style.display = 'none'
    
    // Limpiar contenedor antes de agregar productos
    categoriaProducto.innerHTML = ''
    
    filtrosProductos.length === 0 ?
    categoriaProducto.innerHTML = `<p class="mensaje-no-productos">Producto no encontrado</p>` :
    filtrosProductos.forEach(({ id, titulo, precio, categoria, descripcion, imagenPrincipal }) => {
    categoriaProducto.innerHTML += `
      <button data-categoria="${categoria}" class="producto-volver">
        <img src="./img/icons/arrow-right.svg" alt="Icono de una flecha" width="20" height="20">
        Volver al catalogo
      </button>
      <div class="separador"></div>

      <div class="producto-container">
        <div id="${id}" class="producto-container--info">
          <div class="info-producto">
            <h2>${titulo}</h2>
            <div class="producto-imagen">
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
              <input type="number" id="cantidad" value="1" min="1" max="4"></input>
              <button class="btn-agregarProducto">Agregar al carrito</button>
            </form>
          </div>
        </div>
        <div class="producto-descripcion">
          <div class="descripcion">
            ${descripcion}
          </div>
        </div>
      </div>
      `
    })

    // Lógica para agregar al carrito
    const agregarAlCarrito = document.querySelector('.agregarProducto')
    
    agregarAlCarrito.addEventListener('submit', (e) => {
      e.preventDefault()

      // Verificar si el usuario está logueado
      if (userData === null) {
        Toastify({
          text: "Primero debe iniciar sesion o registrarse",
          duration: 1000,
          close: false,
          gravity: "top",
          position: "right", 
          style: {
            background: "#fd4242",
            boxShadow: 'none',
            borderRadius: '12px'
          },
        }).showToast()
        return
      }

      // Obtener el carrito actual del localStorage
      let carrito = JSON.parse(localStorage.getItem('carrito')) || []

      // Verificar si el producto ya existe en el carrito
      filtrosProductos.forEach(({ id, titulo, precio, imagenPrincipal }) => {
        let productoAgregado = {
          id: id,
          titulo: titulo,
          precio: precio,
          img: imagenPrincipal,
          cantidad: document.querySelector('#cantidad').value
        }

        // Comprobar si el producto ya está en el carrito
        const productoExistente = carrito.find(item => item.id === productoAgregado.id)

        if (productoExistente) {
          // Si el producto ya está en el carrito, mostrar el mensaje de alerta
          Toastify({
            text: "❌ Ya esta en el carrito",
            duration: 1000,
            gravity: "top", 
            position: "right",
            style: {
              background: "#003C43",
              boxShadow: 'none',
              borderRadius: '12px'
            },
          }).showToast()
        } else {
          // Si el producto no está en el carrito, lo agregamos
          carrito.push(productoAgregado)

          // Actualizamos el carrito en el localStorage
          localStorage.setItem('carrito', JSON.stringify(carrito))

          // Confirmación de agregado al carrito
          Toastify({
            text: "✅ Producto agregado",
            duration: 1000,
            close: false,
            gravity: "top",
            position: "right", 
            style: {
              background: "#003C43",
              boxShadow: 'none',
              borderRadius: '12px'
            },
          }).showToast()

          actualizarContadorCarrito()
        }
      });
    });
    
    const botonVolver = categoriaProducto.querySelector('.producto-volver')
    botonVolver.addEventListener('click', () => {
      const categoria = botonVolver.getAttribute('data-categoria')
      window.location.href = `./categoria.html?categoria=${categoria}`
    })
  }, 400)

};

document.addEventListener('DOMContentLoaded', obtenerProducto)
