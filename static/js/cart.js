// cart.js

const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const updateCartBtns = document.querySelectorAll('.update-cart-btn');
const removeCartBtns = document.querySelectorAll('.remove-cart-btn');

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', addToCart);
});

updateCartBtns.forEach(btn => {
  btn.addEventListener('click', updateCart);
});

removeCartBtns.forEach(btn => {
  btn.addEventListener('click', removeCart);
});

async function addToCart(e) {
  e.preventDefault();
  const product_id = this.dataset.productId;
  const quantity = this.closest('.product').querySelector('.quantity').value;
  const response = await fetch('/add_to_cart', {
    method: 'POST',
    body: new FormData(),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `product_id=${product_id}&quantity=${quantity}`,
  });
  const data = await response.json();
  alert(data.message);
}

async function updateCart(e) {
  e.preventDefault();
  const product_id = this.dataset.productId;
  const quantity = this.closest('.product').querySelector('.quantity').value;
  const response = await fetch('/update_cart', {
    method: 'POST',
    body: new FormData(),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `product_id=${product_id}&quantity=${quantity}`,
  });
  const data = await response.json();
  alert(data.message);
}

async function removeCart(e) {
  e.preventDefault();
  const product_id = this.dataset.productId;
  const response = await fetch('/remove_from_cart', {
    method: 'POST',
    body: new FormData(),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `product_id=${product_id}`,
  });
}