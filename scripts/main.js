// Funcion para obtener el usuario

export const sesionIniciada = localStorage.getItem('sesionIniciada') ? JSON.parse(localStorage.getItem('sesionIniciada')) : null

if (sesionIniciada) {
  const usuarioElemento = document.querySelector('#Usuario')
  usuarioElemento ?
      usuarioElemento.innerHTML = `
        <p class='login'>${sesionIniciada.usuario}</p>
        <button id='logOut'><img src='./img/icons/logout-icon.svg' alt='Icono de cerrar sesion' height='20' width='20' /></button>
      `
    :
      usuarioElemento.innerHTML = `
        <a href="./logIn.html" rel="noopener noreferrer">
          <img src="./img/icons/icon-user.svg" alt="Icono de usuario" height="30" width="30">
        </a>
      `
}


// Funcion para cerrar sesion

const logoutButton = document.getElementById('logOut');

if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    // Elimina los datos del usuario de localStorage
    localStorage.removeItem('sesionIniciada')
    localStorage.removeItem('carrito')

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = './index.html'
  })
}

// Scripts para el el boton de las categorias

document.querySelector('.categories-btn').addEventListener('click', () => {
  document.querySelector('.categories-content').classList.toggle('show');
});

// Cerrar el menú desplegable de categorias si el usuario hace clic fuera de él
window.onclick = (event) => {
  if (!event.target.matches('.categories-btn')) {
    const dropdowns = document.getElementsByClassName("categories-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

// Scripts para el menu de las categorias

// Obtenemos las categorias
const obtenerCategorias = async () => {
  const URL = '../data/categorias.json'
  try {
    const response = await fetch(URL)
    const categorias = await response.json()
    mostrarCategoria(categorias, '.categories-content')
    mostrarAlgunasCateogrias(categorias, '.category-links')
  } catch (error) {
    console.error('Error:', error)
  }
}

// Tenemos que pasar como parametro las categorias y la clase contenedora donde van a estar las categorias
const mostrarCategoria = (categoria, container) => {
  const categoriasProductos = document.querySelector(container)

  const categoriesHTML = categoria.map(({categoria}) => {
    let category = `<button data-categoria="${categoria}">${categoria}</button>`

    return category
  }).join('')

  categoriasProductos.innerHTML = categoriesHTML

  const botonesMenu = categoriasProductos.querySelectorAll('button')
  botonesMenu.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.getAttribute('data-categoria')
      window.location.href = `./categoria.html?categoria=${categoria}`
    })
  })
}

// Scripts para mostrar algunas categorias

const mostrarAlgunasCateogrias = (categoria, container) => {
  const categoriasProductosLinks = document.querySelector(container)

  const categoriaLinksHTML = categoria.slice(0, 5).map(({ categoria }) => {
    return `<button data-categoria="${categoria}">${categoria}</button>`
  }).join('')

  categoriasProductosLinks.innerHTML = categoriaLinksHTML

  const botones = categoriasProductosLinks.querySelectorAll('button')
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.getAttribute('data-categoria');
      window.location.href = `./categoria.html?categoria=${categoria}`
    })
  })
}

document.addEventListener('DOMContentLoaded', obtenerCategorias())

// Funcion para el carrito de compras 
export const actualizarContadorCarrito = () => {
  const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || []
  const contadorCarrito = document.querySelector('.cart-count')
  contadorCarrito.textContent = productosEnCarrito.length
}

// Actualizando el carrito de compras
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito)