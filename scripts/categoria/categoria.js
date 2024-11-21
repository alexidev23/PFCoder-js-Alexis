const obtenerProductos = async () => {
  const URL = '../../productos.json'
  try {
    const response = await fetch(URL)
    const productos = await response.json()
    mostrarProductos(productos)
  } catch (error) {
    console.error('Error:', error)
  }
}

const mostrarProductos = (productos) => {
  const urlParams = new URLSearchParams(window.location.search)
  const categoria = urlParams.get('categoria')

  const loader = document.querySelector('.loader')

  const tituloCategoria = document.querySelector('.categoria-container--1 h1')

  tituloCategoria.innerHTML = `${categoria}`

  const categoriaProductos = document.querySelector('.categoria-container--3_productos-caja')
  
  const filtrosProductos = productos.filter(item => item.categoria === categoria)

  mostrarProductoCategoria(filtrosProductos,categoriaProductos, loader)

  const selectOrden = document.getElementById('ordenar')

  // Escuchar cambios en el <select>
  selectOrden.addEventListener('change', () => {
    const orden = selectOrden.value; // Obtener el valor seleccionado
    
    if (orden === "menorPrecio") {
      const productosMenorAMayor = [...filtrosProductos].sort((a, b) => a.precio - b.precio)

      mostrarProductoCategoria(productosMenorAMayor,categoriaProductos, loader)
    } else if (orden === "mayorPrecio") {
      const productosMayorAMenor = [...filtrosProductos].sort((a, b) => b.precio - a.precio)

      mostrarProductoCategoria(productosMayorAMenor, categoriaProductos, loader)
    } else {
      mostrarProductoCategoria(filtrosProductos,categoriaProductos, loader)
    }
  })

  
}

const mostrarProductoCategoria = (productosFiltrados,container,loader) => {
  productosFiltrados.length === 0 ?
    // Si no hay productos en esta categoría, muestra el mensaje
    container.innerHTML = `
      <p class="mensaje-no-productos">En estos momentos no tenemos el producto que está buscando</p>
    `
  :
    setTimeout(() => {
      loader.style.display = 'none'
      container.innerHTML = ''
      // Si hay productos, los mostramos
      productosFiltrados.forEach(({ id, titulo, precio, imagenPrincipal }) => {
        container.innerHTML += `
          <button data-producto="${id}" class="categoria-productos--item">
            <div class="categoria-productos--item_imagen">
              <img src="./img/productos/${imagenPrincipal}" alt="${titulo}" width="auto" height="100%">
            </div>
            <div class="categoria-productos--item_info">
              <h4>${titulo}</h4>
              <p>$${precio}</p>
            </div>
          </button>
        `

        const botones = container.querySelectorAll('button')
        botones.forEach(boton => {
          boton.addEventListener('click', () => {
            const id = boton.getAttribute('data-producto')
            window.location.href = `./producto.html?id=${id}`
            console.log(id)
          })
        })
      })
    }, 400)
}

document.addEventListener('DOMContentLoaded', () => {
  obtenerProductos()

})