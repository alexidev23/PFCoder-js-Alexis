const nombre = prompt('Ingrese su nombre: ')

alert(`Hola bienvenido,${nombre}`)
alert(`${nombre} quiere seguir con su compra?`)
let compra = prompt('(1:SI, 2:NO): ')

if (compra === '2' || compra === 'NO' || compra === 'no') {
  alert('Gracias por su visita!')
} else if (compra === '1' || compra === 'SI' || compra === 'si') {
  alert('Este es su carrito:\n 1\tPc AMD Ryzen 7 5700G 8Gb SSD 240Gb + Monitor 22\n 1\tCelular Motorola Edge 40 6.55" 8/256GB magenta')
  alert('Necesitamos los siguientes datos para completar el pedido:\n- Apellido,\n- Celular,\n- Correo Electronico,\n- Direccion,\n- Codigo Postal')
  const apellido = prompt('Ingrese su apellido:')
  const celular = prompt('Ingrese su número de celular:')
  const correo = prompt('Ingrese su correo electrónico:')
  const direccion = prompt('Ingrese su dirección:')
  const codigo = prompt('Ingrese su código postal:')

  alert('Gracias por su compra, una vez despachada su compra le va a llegar un correo sobre el dia y hora que va a estar llegando su pedido en el domicilio establecido')
}

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
