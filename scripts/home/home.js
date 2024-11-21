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

// Funcion para mostrar algunos productos de las categorias ingresadas
// Función para obtener y mostrar el producto
const obtenerProducto = async () => {
  const URL = '/productos.json'
  try {
    const response = await fetch(URL)
    const producto = await response.json()
    mostrarCategoria(producto, 'Computadoras', 'Celulares', '.categoria-container--1')
    mostrarCategoria(producto, 'Televisores', 'Notebooks', '.categoria-container--2')
  } catch (error) {
    console.error('Error:', error)
  }
}

const mostrarCategoria = (productos,categoria1,categoria2,claseContenedora) => {
  // Selecciona el contenedor donde se mostrará la categoría
  const categoriaContainer = document.querySelector(claseContenedora)

  // Filtra y selecciona hasta 4 productos para la categoría seleccionada
  const productosFiltrados1 = productos.filter(item => item.categoria === categoria1).slice(0, 4)
  const productosFiltrados2 = productos.filter(item => item.categoria === categoria2).slice(0, 4)

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
          <button data-categoria="${categoria2}" class="categoria-container--productos_icono">
            <img src="./img/icons/arrow-right.svg" alt="Icono de flecha" width="40" height="40">
          </button>
        </div>
      </div>
    </div>
  `;

  categoriaContainer.addEventListener('click', (event) => {
    const boton = event.target.closest('.categoria-container--productos_item');
    if (boton) {
      const id = boton.getAttribute('data-producto');
      window.location.href = `./producto.html?id=${id}`;
    }
  });

  categoriaContainer.addEventListener('click', (event) => {
    const botonCategoria = event.target.closest('.categoria-container--productos_icono')
    if (botonCategoria) {
      const categoria = botonCategoria.getAttribute('data-categoria');
      window.location.href = `./categoria.html?categoria=${categoria}`;
    }
  })
};

document.addEventListener('DOMContentLoaded', obtenerProducto)