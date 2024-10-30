import { Categorias } from "./Datos.js";

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
      <button id='logOut'><img src='./img/icons/logout-icon.svg' alt='Icono de cerrar sesion' height='20' width='20' /></button>
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

  const botonesCategoria = categoriasProductos.querySelectorAll('button');
  botonesCategoria.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.getAttribute('data-categoria');
      mostrarProductos(categoria)
    })
  })

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
      mostrarProductos(categoria)
    })
  })
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

const mostrarProductos = (producto) => {
  console.log(producto)
  window.location.href = `./categoria.html`
}
