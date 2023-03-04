const addToCartBtn = document.querySelector('#add-to-cart-btn');

// Add an event listener to the button
addToCartBtn.addEventListener('click', () => {
    // Get the quantity value from the select element
    const qtySelect = document.querySelector('#autoSizingSelect');
    const qty = qtySelect.value;

    // Create an object to represent the product
    const product = {
        name: 'Product Name',
        price: 209.00,
        quantity: qty,
    };

    // Get the cart from local storage or create an empty one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const index = cart.findIndex(item => item.name === product.name);

    if (index !== -1) {
        // If the product is already in the cart, update its quantity
        cart[index].quantity += Number(qty);
    } else {
        // Otherwise, add the product to the cart
        cart.push(product);
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect the user to the cart page
    window.location.href = '/shop/cart';
});