// Iniciar Sesion
const logIn = document.getElementById('usuario');

document.querySelector('#logInUser').addEventListener('click', () => {
  newUser()
})

const newUser = () => {
  alert('Bienvenido a Tech Shop, por favor a continuacion ingrese su usuario y contraseña')
  const usuario = prompt('Ingrese su usuario:')
  const password = prompt('Ingrese su contraseña:')

  if (usuario === '' && password === '' || usuario === '' && password !== '' || usuario !== '' && password === '' || usuario === null && password === null) {
    alert('Por favor ingrese los datos necesarios para iniciar sesion')
  } else if (usuario !== '' && password !== ''){
    logIn.innerHTML = `<p class='login'>Bienvenida/o, ${usuario}!</p>`
    document.querySelector('.cart-count').textContent = 2;
  }
}

// Scripts para el el boton de las categorias

document.querySelector('.categories-btn').addEventListener('click', function() {
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

// Scripts para el carrusel de la publicidad
const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// confirmarPedido(compra)
// Mostrando la cantidad de productos que tiene en el carrito de compra
// Simulación de agregar al carrito
// let cartCount = 0;
// document.querySelector('.cart-icon').addEventListener('click', function() {
//   cartCount++;
//   document.querySelector('.cart-count').textContent = 4;
// });