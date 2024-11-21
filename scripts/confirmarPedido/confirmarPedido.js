const form = document.getElementById('confirmarPedido')
const modal = document.querySelector('.modal')

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Teléfono
    const tel = document.getElementById('tel').value.trim();
    const errorTel = document.querySelector('.errorTel');
    errorTel.innerHTML = ``

    if (tel.length > 15 || tel.length < 12) {
      errorTel.innerHTML = `<span>El número de teléfono debe tener entre 12 y 15 dígitos.</span>`
      return
    }

    // Código Postal
    const CP = document.getElementById('codigoPostal').value.trim()
    const errorCP = document.querySelector('.errorCP')
    errorCP.innerHTML = ``

    if (CP.length > 5 || CP.length < 4) {
      errorCP.innerHTML = `<span>El código postal debe tener entre 4 y 5 dígitos.</span>`
      return
    }

    // Número de casa
    const numCasa = document.getElementById('numCalle').value.trim()
    const errorNumCasa = document.querySelector('.errorNumCasa')
    errorNumCasa.innerHTML = ``

    if (numCasa.length > 4 || numCasa.length < 1) {
      errorNumCasa.innerHTML = `<span>El número de casa debe tener entre 1 y 4 dígitos.</span>`
      return
    }

    // Si todas las validaciones pasan
    modal.style.display = "flex"
    localStorage.removeItem('carrito')
    
  });
}
