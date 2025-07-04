const products = [
  {
    id: 1,
    name: "Shailaputri Divine Lehenga",
    category: "Traditional Wear",
    price: 12999,
    originalPrice: 18999,
    image: "https://unsplash.com/photos/a-bridge-spans-over-crystal-clear-water-W51Rp00XOdM",
    description: "Blessed yellow lehenga for Day 1 of Navratri",
    features: ["Pure silk", "Hand embroidered"]
  }
  // Add more products if needed
];

// --- Render Products ---
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.category}</p>
      <p>₹${p.price.toLocaleString()} <span style="text-decoration:line-through">₹${p.originalPrice.toLocaleString()}</span></p>
      <p>${p.description}</p>
      <button onclick="addToCart(${p.id})">Add to Sacred Cart</button>
    </div>
  `).join('');
}

// --- Cart Logic ---
function getCart() {
  return JSON.parse(localStorage.getItem('sacredCart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('sacredCart', JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }

  saveCart(cart);
  alert(`${product.name} added to cart!`);
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const totalDisplay = document.getElementById('totalAmount');
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = "<p>Your sacred cart is empty</p>";
    totalDisplay.textContent = "₹0";
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" width="100" />
      <h3>${item.name}</h3>
      <p>₹${item.price.toLocaleString()} x ${item.quantity}</p>
      <button onclick="changeQuantity(${item.id}, -1)">-</button>
      <button onclick="changeQuantity(${item.id}, 1)">+</button>
      <button onclick="removeItem(${item.id})">Remove</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  totalDisplay.textContent = `₹${total.toLocaleString()}`;
}

function changeQuantity(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeItem(id);
  } else {
    saveCart(cart);
    renderCart();
  }
}

function removeItem(id) {
  let cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
}

function checkout() {
  const cart = getCart();
  if (cart.length === 0) return alert("Cart is empty!");

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  alert(`🕉️ Total ₹${total.toLocaleString()} — Redirecting to payment...`);

  localStorage.removeItem('sacredCart');
  renderCart();
}

// --- Auth ---
auth.onAuthStateChanged(user => {
  if (user && document.getElementById('userEmail')) {
    document.getElementById('userEmail').textContent = `Logged in as: ${user.email}`;
  }
});

function login() {
  const email = prompt("Enter email");
  const password = prompt("Enter password");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Logged in!"))
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => {
    alert("Logged out!");
    location.reload();
  });
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
});
