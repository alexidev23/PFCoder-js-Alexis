const form = document.getElementById('confirmarPedido');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Pedido realizado con exito\nDentro de unos dias le va a llegar un correo con un link para seguir el envio')

    localStorage.clear('pedidos')

    // Redirigir a otra página
    window.location.href = './carrito_compras.html';
  });
}
