const carrito = document.getElementById('carrito')
// const precioFinal = document.getElementsByClassName('precioTotal')

document.querySelector('#btn-confirmarPedido').addEventListener('click', () => {
  alert('A continuacion ingrese los siguiente datos para finalizar la compra')
  const datos = datosUsuario()

  if (datos.compraFinal === true) {
    carrito.innerHTML = `      
      <div class="carrito-compras--vacio">
        <p>El carrito de compras esta vacío.</p>
        <p>Puedes agregar productos desde el botón añadir en el catálogo.</p>
      </div>
      <div class="carrito-compras--vacio_boton">
        <a href="./index.html" rel="noopener noreferrer">Continuar</a>
      </div>`
  }
})

const datosUsuario = () => {
  let nombre = ''
  let correo = ''
  let direccion = ''
  let cPostal = ''
  let telefono = ''
  let compraFinal = true

  // Mientras alguno de los datos esté vacío, seguirá solicitando los datos
  while (!nombre || !correo || !direccion || !cPostal || !telefono) {
    if (!nombre) nombre = prompt('Ingrese su nombre:')
    if (!correo) correo = prompt('Ingrese su correo:')
    if (!direccion) direccion = prompt('Ingrese su dirección:')
    if (!cPostal) cPostal = prompt('Ingrese su código postal:')
    if (!telefono) telefono = prompt('Ingrese su teléfono:')

    // Si falta algún dato, muestra la alerta
    if (!nombre || !correo || !direccion || !cPostal || !telefono) {
      alert('Debe ingresar todos los datos para continuar con la compra.')
    }
  }

  // Retorna los datos completos
  alert('Todos los datos han sido ingresados correctamente.')
  alert(`Gracias por su compra!\nEl paquete llegara dentro de 7 dias en el domicilio ${direccion}`)
  return { compraFinal }
};

