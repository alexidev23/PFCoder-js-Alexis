document.querySelector('.btn-agregarProducto').addEventListener('click', () => {
  alert('Producto agregado')
  let carrito = 1
  document.querySelector('.cart-count').textContent = carrito;
})