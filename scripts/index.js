import { Categorias, Productos } from "./Datos.js";

// Mostrar datos en la página de bienvenida
const userData = JSON.parse(localStorage.getItem('user'))
const newUserData = JSON.parse(localStorage.getItem('newUser'))

if (userData) {
  const usuarioElemento = document.querySelector('#Usuario')
  if (usuarioElemento) {
    usuarioElemento.innerHTML = `
      <p class='login'>Bienvenido, ${userData.usuario}!</p>
      <button id='logOut'><img src='./img/icons/logout-icon.svg' alt='Icono de cerrar sesion' height='20' width='20' /></button>
    `;

  } else {
    usuarioElemento.innerHTML = `
      <a href="./logIn.html" rel="noopener noreferrer">
        <img src="./img/icons/icon-user.svg" alt="Icono de usuario" height="30" width="30">
      </a>
    `
  }
} else if (newUserData) {
  const usuarioElemento = document.querySelector('#Usuario')
  if (usuarioElemento) {
    usuarioElemento.innerHTML = `
      <p class='login'>Bienvenido, ${newUserData.usuario}!</p>
      <button id='logOut'><img src='./img/icons/logout-icon.svg' alt='Icono de cerrar sesion'></button>
    `;

  } else {
    usuarioElemento.innerHTML = `
      <a href="./logIn.html" rel="noopener noreferrer">
        <img src="./img/icons/icon-user.svg" alt="Icono de usuario" height="30" width="30">
      </a>
    `
  }
}

// Boton para cerrar sesion

const logoutButton = document.getElementById('logOut');

if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    // Elimina los datos del usuario de localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('newUser');

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = './index.html';
  });
}

// Scripts para el el boton de las categorias

document.querySelector('.categories-btn').addEventListener('click', () => {
  document.querySelector('.categories-content').classList.toggle('show');
});

// Cerrar el menú desplegable de categorias si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('.categories-btn')) {
    var dropdowns = document.getElementsByClassName("categories-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Scripts para el menu de las categorias

document.addEventListener('DOMContentLoaded', () => {
  // Mostrar todas las categorias
  const categoriasProductos = document.querySelector('.categories-content')

  const categoriesHTML = Categorias.map(({id,categoria}) => {
    let category = `<button data-categoria="${categoria}">${categoria}</button>`

    return category
  }).join('')

  categoriasProductos.innerHTML = categoriesHTML

  const botonesMenu = categoriasProductos.querySelectorAll('button');
  botonesMenu.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.getAttribute('data-categoria');
      window.location.href = `./categoria.html?categoria=${categoria}`;
    });
  });

  // Mostrar algunas categorias

  const categoriasProductosLinks = document.querySelector('.category-links')

  const categoriaLinksHTML = Categorias.slice(0, 5).map(({ id, categoria }) => {
    return `<button data-categoria="${categoria}">${categoria}</button>`

  }).join('')

  categoriasProductosLinks.innerHTML = categoriaLinksHTML

  const botones = categoriasProductosLinks.querySelectorAll('button');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.getAttribute('data-categoria');
      window.location.href = `./categoria.html?categoria=${categoria}`;
    });
  });
})

// Scripts para el carrusel de la publicidad

const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Mostrar los productos de la categoria seleccionada

const mostrarCategoria = (categoria1, categoria2,claseContenedora) => {
  // Selecciona el contenedor donde se mostrará la categoría
  const categoriaContainer = document.querySelector(claseContenedora);

  // Filtra y selecciona hasta 4 productos para la categoría seleccionada
  const productosFiltrados1 = Productos.filter(item => item.categoria === categoria1).slice(0, 4);
  const productosFiltrados2 = Productos.filter(item => item.categoria === categoria2).slice(0, 4);

  // Genera el HTML para la categoría y sus productos
  categoriaContainer.innerHTML = `
    <div class="categoria-container">
      <div class="categoria-container--titulo">
        <div class="categoria-container--titulo_icono"></div>
        <h2>${categoria1.charAt(0).toUpperCase() + categoria1.slice(1)}</h2>
      </div>
      <div class="categoria-container--productos">
        ${productosFiltrados1.map(({ id, titulo, precio, imagenPrincipal }) => `
          <button data-producto=${id} href="./producto.html" class="categoria-container--productos_item">
            <div class="categoria-container--productos_item-imagen">
              <img src="./img/productos/${imagenPrincipal}" alt="Imagen de ${titulo}" width="auto" height="100%">
            </div>
            <div class="categoria-container--productos_item-info">
              <h4>${titulo}</h4>
              <p>$${precio}</p>
            </div>
          </button>
        `).join('')}
        <div class="cajaBtn">
          <button data-categoria="${categoria1}" class="categoria-container--productos_icono">
            <img src="./img/icons/arrow-right.svg" alt="Icono de flecha" width="40" height="40">
          </button>
        </div>
      </div>
    </div>

    <div class="categoria-container">
      <div class="categoria-container--titulo">
        <div class="categoria-container--titulo_icono"></div>
        <h2>${categoria2.charAt(0).toUpperCase() + categoria2.slice(1)}</h2>
      </div>
      <div class="categoria-container--productos">
        ${productosFiltrados2.map(({ id, titulo, precio, imagenPrincipal }) => `
          <button id="BotonProducto" data-producto="${id}" class="categoria-container--productos_item">
            <div class="categoria-container--productos_item-imagen">
              <img src="./img/productos/${imagenPrincipal}" alt="Imagen de ${titulo}" width="auto" height="100%">
            </div>
            <div class="categoria-container--productos_item-info">
              <h4>${titulo}</h4>
              <p>$${precio}</p>
            </div>
          </button>
        `).join('')}
        <div class="cajaBtn">
          <button data-categoria="${categoria2}" class="categoria-container--productos_icono">
            <img src="./img/icons/arrow-right.svg" alt="Icono de flecha" width="40" height="40">
          </button>
        </div>
      </div>
    </div>
  `;
};

mostrarCategoria('Computadoras', 'Celulares', '.categoria-container--1')
mostrarCategoria('Notebooks', 'Televisores', '.categoria-container--2')

// const cajaBotonCategoria = document.querySelector(".cajaBtn")

// const botonesCategoria = cajaBotonCategoria.querySelectorAll('button');
// botonesCategoria.forEach(boton => {
//   boton.addEventListener('click', () => {
//     const categoria = boton.getAttribute('data-categoria');
//     window.location.href = `./categoria.html?categoria=${categoria}`;
//   });
// });

// const cateogriaProducto = document.querySelector('.categoria-container--productos')

// const botones = cateogriaProducto.querySelectorAll('#BotonProducto');
// botones.forEach(boton => {
//   boton.addEventListener('click', () => {
//     const id = boton.getAttribute('data-producto');
//     window.location.href = `./producto.html?id=${id}`;
//     console.log(id)
//   });
// });


// const productoItem = document.querySelector('.categoria-container--productos')

// const botones = productoItem.querySelectorAll('button');

// botones.forEach(boton => {
//   boton.addEventListener('click', () => {
//     const id = boton.getAttribute('data-producto');
//     window.location.href = `./producto.html?id=${id}`;
//     console.log(id)
//   });
// });

// Actualiza el contador del carrito al cargar la página
function actualizarContadorCarrito() {
  const productosEnCarrito = JSON.parse(localStorage.getItem('productos')) || [];
  const contadorCarrito = document.querySelector('.cart-count');
  contadorCarrito.textContent = productosEnCarrito.length;
}

// Actualizando el carrito de compras
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);