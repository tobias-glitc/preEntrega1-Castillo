const productsData = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 15 },
];

const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cart-items');

// Mostrar productos en la tienda
productsData.forEach(product => {
  const productElement = document.createElement('div');
  productElement.className = 'product';
  productElement.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
  `;
  productsContainer.appendChild(productElement);
});

// Manejar clic en "Agregar al Carrito"
productsContainer.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart')) {
      const productId = parseInt(event.target.getAttribute('data-id'));
      const selectedProduct = productsData.find(product => product.id === productId);
      if (selectedProduct) {
          addToCart(selectedProduct);
      }
  }
});

// Agregar producto al carrito
function addToCart(product) {
  const cartItemElement = document.createElement('li');
  cartItemElement.className = 'cart-item';
  cartItemElement.innerHTML = `
      <span>${product.name}</span>
      <span>$${product.price}</span>
  `;
  cartItemsContainer.appendChild(cartItemElement);
}


