 // Check if user is logged in
        function checkUserLogin() {
            const userLoggedIn = sessionStorage.getItem('userLoggedIn');
            const userName = sessionStorage.getItem('userName');
            const userEmail = sessionStorage.getItem('userEmail');
            
            if (userLoggedIn === 'true') {
                updateUIForLoggedInUser(userName, userEmail);
            } else {
                updateUIForGuestUser();
            }
        }

        // Update UI for logged in user
        function updateUIForLoggedInUser(userName, userEmail) {
            // Hide auth buttons
            document.querySelector('.auth-buttons').style.display = 'none';
            
            // Show user info
            const userInfo = document.querySelector('.user-info');
            userInfo.style.display = 'flex';
            
            // Update user details
            const displayName = userName || 'Sacred Soul';
            const initial = displayName.charAt(0).toUpperCase();
            
            document.getElementById('userNameDisplay').textContent = displayName;
            document.getElementById('userInitial').textContent = initial;
            document.getElementById('userAvatar').textContent = initial;
            document.getElementById('userName').textContent = displayName;
            document.getElementById('userEmail').textContent = userEmail || '';
            
            // Show user-only features
            showUserFeatures();
        }

        // Update UI for guest user
        function updateUIForGuestUser() {
            // Show auth buttons
            document.querySelector('.auth-buttons').style.display = 'flex';
            
            // Hide user info
            document.querySelector('.user-info').style.display = 'none';
            
            // Hide user-only features
            hideUserFeatures();
        }

        // Toggle user dropdown menu
        function toggleUserMenu() {
            const dropdown = document.getElementById('userDropdownMenu');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('userDropdownMenu');
            const userMenuBtn = document.querySelector('.user-menu-btn');
            
            if (dropdown && userMenuBtn && !userMenuBtn.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });

        // User menu actions
        function viewProfile() {
            toggleUserMenu();
            alert('Profile page coming soon!');
        }

        function viewOrders() {
            toggleUserMenu();
            alert('Orders page coming soon!');
        }

        function viewWishlist() {
            toggleUserMenu();
            alert('Wishlist page coming soon!');
        }

        // Logout function
        function logout() {
            const confirmLogout = confirm('Are you sure you want to logout?');
            if (confirmLogout) {
                sessionStorage.removeItem('userLoggedIn');
                sessionStorage.removeItem('userName');
                sessionStorage.removeItem('userEmail');
                sessionStorage.removeItem('userPhone');
                sessionStorage.removeItem('authToken');
                
                cart = [];
                updateCartUI();
                
                showNotification('Logged out successfully! 🕉️');
                updateUIForGuestUser();
            }
        }

        // Show/hide user features
        function showUserFeatures() {
            const userOnlyElements = document.querySelectorAll('.user-only');
            userOnlyElements.forEach(element => {
                element.style.display = 'block';
            });
        }

        function hideUserFeatures() {
            const userOnlyElements = document.querySelectorAll('.user-only');
            userOnlyElements.forEach(element => {
                element.style.display = 'none';
            });
        }

        // Cart functions (simplified)
        function toggleCart() {
            alert('Cart modal would open here');
        }

        function updateCartUI() {
            document.querySelector('.cart-count').textContent = cartCount;
        }

        // Notification function
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 30px;
                background: var(--gradient-royal);
                color: white;
                padding: 20px 30px;
                border-radius: 25px;
                font-weight: 700;
                z-index: 3001;
                animation: slideInRight 0.3s ease;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            `;
            notification.textContent = message;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 3000);
        }

        // Demo function to simulate login
        function simulateLogin() {
            sessionStorage.setItem('userLoggedIn', 'true');
            sessionStorage.setItem('userName', 'Priya Sharma');
            sessionStorage.setItem('userEmail', 'priya@example.com');
            checkUserLogin();
            showNotification('Welcome back, Priya! 🕉️');
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            checkUserLogin();
            updateCartUI();
        });


        // Product Data
        const products = [
            {
        id: 1,
        name: "Shailaputri Divine Lehenga",
        category: "Traditional Wear",
        price: 12999,
        originalPrice: 18999,
        image: "https://unsplash.com/photos/a-bridge-spans-over-crystal-clear-water-W51Rp00XOdM",
        description: "Blessed yellow lehenga for Day 1 of Navratri",
        features: ["Pure silk fabric", "Hand embroidered", "Traditional design", "Premium quality"]
    },
            {
                id: 2,
                name: "Brahmacharini Sacred Saree",
                category: "Sarees",
                price: 8999,
                originalPrice: 12999,
                image: "🥻",
                description: "Divine green saree for Day 2 celebration",
                features: ["Handwoven silk", "Gold border", "Blessed design", "Comfortable drape"]
            },
            {
                id: 3,
                name: "Chandraghanta Royal Jewelry",
                category: "Jewelry",
                price: 15999,
                originalPrice: 22999,
                image: "💎",
                description: "Elegant grey-toned jewelry set",
                features: ["Sterling silver", "Precious stones", "Antique finish", "Complete set"]
            },
            {
                id: 4,
                name: "Kushmanda Orange Kurta Set",
                category: "Ethnic Wear",
                price: 6999,
                originalPrice: 9999,
                image: "🧥",
                description: "Vibrant orange kurta for Day 4",
                features: ["Cotton silk blend", "Intricate patterns", "Comfortable fit", "Premium buttons"]
            },
            {
                id: 5,
                name: "Skandamata White Dupatta",
                category: "Accessories",
                price: 3999,
                originalPrice: 5999,
                image: "🧣",
                description: "Pure white dupatta for Day 5",
                features: ["Pure chiffon", "Golden work", "Lightweight", "Sacred purity"]
            },
            {
                id: 6,
                name: "Katyayani Red Anarkali",
                category: "Designer Wear",
                price: 16999,
                originalPrice: 24999,
                image: "👚",
                description: "Stunning red Anarkali for Day 6",
                features: ["Floor length", "Mirror work", "Premium fabric", "Royal design"]
            }
        ];

        // Cart functionality
        let cart = [];
        let cartCount = 0;
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 10px;" />
                <div class="product-badge">Premium</div>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <div class="product-price">
                ₹${product.price.toLocaleString()}
                <span class="product-price-original">₹${product.originalPrice.toLocaleString()}</span>
            </div>
            <p class="product-description">${product.description}</p>
            <ul class="product-features">
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Sacred Cart
            </button>
        </div>
    `).join('');
}


        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({...product, quantity: 1});
            }
            
            updateCartUI();
            showNotification(`${product.name} added to cart!`);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        function updateCartUI() {
            cartCount = cart.reduce((total, item) => total + item.quantity, 0);
            document.querySelector('.cart-count').textContent = cartCount;
            
            const cartItems = document.getElementById('cartItems');
            const totalAmount = document.getElementById('totalAmount');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: var(--day9-purple); font-size: 1.2rem;">Your sacred cart is empty</p>';
                totalAmount.textContent = '₹0';
                return;
            }
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.image}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalAmount.textContent = `₹${total.toLocaleString()}`;
        }

        function toggleCart() {
            const modal = document.getElementById('cartModal');
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`🕉️ Divine Checkout\n\nTotal: ₹${total.toLocaleString()}\nItems: ${cartCount}\n\nMay Maa Durga bless your purchase!\n\nRedirecting to payment...`);
            
            // Reset cart after checkout
            cart = [];
            updateCartUI();
            toggleCart();
        }

        function scrollToProducts() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }

        function showNotification(message) {
            // Create a simple notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 30px;
                background: var(--gradient-royal);
                color: white;
                padding: 20px 30px;
                border-radius: 25px;
                font-weight: 700;
                z-index: 3001;
                animation: slideInRight 0.3s ease;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            `;
            notification.textContent = message;
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 3000);
        }

        // Close cart when clicking outside
        document.getElementById('cartModal').addEventListener('click', function(e) {
            if (e.target === this) {
                toggleCart();
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateCartUI();
        });

        // Check if user is logged in
function checkUserLogin() {
   const userLoggedIn = sessionStorage.getItem('userLoggedIn');
   const userName = sessionStorage.getItem('userName');
   const userEmail = sessionStorage.getItem('userEmail');
   
   if (userLoggedIn === 'true') {
       // User is logged in, show user info
       updateUIForLoggedInUser(userName, userEmail);
   } else {
       // User is not logged in, show login/signup options
       updateUIForGuestUser();
   }
}

// Update UI for logged in user
function updateUIForLoggedInUser(userName, userEmail) {
   // Update navigation or header with user info
   const userSection = document.querySelector('.user-section') || createUserSection();
   userSection.innerHTML = `
       <div class="user-info">
           <span class="user-greeting">🕉️ Welcome, ${userName || 'Sacred Soul'}</span>
           <div class="user-dropdown">
               <button class="user-menu-btn" onclick="toggleUserMenu()">
                   <span class="user-initial">${(userName || 'S').charAt(0).toUpperCase()}</span>
                   <span class="dropdown-arrow">▼</span>
               </button>
               <div class="user-dropdown-menu" id="userDropdownMenu">
                   <div class="user-profile">
                       <div class="user-avatar">${(userName || 'S').charAt(0).toUpperCase()}</div>
                       <div class="user-details">
                           <div class="user-name">${userName || 'Sacred Soul'}</div>
                           <div class="user-email">${userEmail || ''}</div>
                       </div>
                   </div>
                   <hr class="dropdown-divider">
                   <a href="#" class="dropdown-item" onclick="viewProfile()">
                       <span class="item-icon">👤</span>
                       My Profile
                   </a>
                   <a href="#" class="dropdown-item" onclick="viewOrders()">
                       <span class="item-icon">📦</span>
                       My Orders
                   </a>
                   <a href="#" class="dropdown-item" onclick="viewWishlist()">
                       <span class="item-icon">💖</span>
                       Wishlist
                   </a>
                   <hr class="dropdown-divider">
                   <a href="#" class="dropdown-item" onclick="logout()">
                       <span class="item-icon">🚪</span>
                       Logout
                   </a>
               </div>
           </div>
       </div>
   `;
   
   // Show cart and other user features
   showUserFeatures();
}

// Update UI for guest user
function updateUIForGuestUser() {
   const userSection = document.querySelector('.user-section') || createUserSection();
   userSection.innerHTML = `
       <div class="auth-buttons">
           <button class="login-btn" onclick="redirectToLogin()">Login</button>
           <button class="signup-btn" onclick="redirectToSignup()">Sign Up</button>
       </div>
   `;
   
   // Hide user-specific features
   hideUserFeatures();
}

// Toggle user dropdown menu
function toggleUserMenu() {
   const dropdown = document.getElementById('userDropdownMenu');
   dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
   const dropdown = document.getElementById('userDropdownMenu');
   const userMenuBtn = document.querySelector('.user-menu-btn');
   
   if (dropdown && userMenuBtn && !userMenuBtn.contains(event.target)) {
       dropdown.style.display = 'none';
   }
});

// User menu actions
function viewProfile() {
   toggleUserMenu();
   alert('Profile page coming soon!');
}

function viewOrders() {
   toggleUserMenu();
   alert('Orders page coming soon!');
}

function viewWishlist() {
   toggleUserMenu();
   alert('Wishlist page coming soon!');
}

// Logout function
function logout() {
   const confirmLogout = confirm('Are you sure you want to logout?');
   if (confirmLogout) {
       // Clear session storage
       sessionStorage.removeItem('userLoggedIn');
       sessionStorage.removeItem('userName');
       sessionStorage.removeItem('userEmail');
       sessionStorage.removeItem('userPhone');
       sessionStorage.removeItem('authToken');
       
       // Clear cart
       cart = [];
       updateCartUI();
       
       // Show logout notification
       showNotification('Logged out successfully! 🕉️');
       
       // Update UI
       updateUIForGuestUser();
   }
}

// Show/hide user features
function showUserFeatures() {
   const cartSection = document.querySelector('.cart-section');
   const userOnlyElements = document.querySelectorAll('.user-only');
   
   if (cartSection) cartSection.style.display = 'block';
   userOnlyElements.forEach(element => {
       element.style.display = 'block';
   });
}

function hideUserFeatures() {
   const cartSection = document.querySelector('.cart-section');
   const userOnlyElements = document.querySelectorAll('.user-only');
   
   if (cartSection) cartSection.style.display = 'none';
   userOnlyElements.forEach(element => {
       element.style.display = 'none';
   });
}

// Enhanced add to cart function with login check
function addToCart(productId) {
   const userLoggedIn = sessionStorage.getItem('userLoggedIn');
   
   if (userLoggedIn !== 'true') {
       const shouldLogin = confirm('Please login to add items to cart. Would you like to login now?');
       if (shouldLogin) {
           redirectToLogin();
       }
       return;
   }
   
   const product = products.find(p => p.id === productId);
   const existingItem = cart.find(item => item.id === productId);
   
   if (existingItem) {
       existingItem.quantity += 1;
   } else {
       cart.push({...product, quantity: 1});
   }
   
   updateCartUI();
   showNotification(`${product.name} added to cart!`);
}

// Enhanced checkout function
function checkout() {
   const userLoggedIn = sessionStorage.getItem('userLoggedIn');
   
   if (userLoggedIn !== 'true') {
       alert('Please login to proceed with checkout.');
       redirectToLogin();
       return;
   }
   
   if (cart.length === 0) {
       alert('Your cart is empty!');
       return;
   }
   
   const userName = sessionStorage.getItem('userName');
   const userEmail = sessionStorage.getItem('userEmail');
   const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
   
   alert(`🕉️ Divine Checkout\n\nCustomer: ${userName || 'Sacred Soul'}\nEmail: ${userEmail || ''}\nTotal: ₹${total.toLocaleString()}\nItems: ${cartCount}\n\nMay Maa Durga bless your purchase!\n\nRedirecting to payment...`);
   
   // Reset cart after checkout
   cart = [];
   updateCartUI();
   toggleCart();
}

// Enhanced notification system
function showNotification(message, type = 'success') {
   const notification = document.createElement('div');
   const bgColor = type === 'success' ? 'var(--gradient-royal)' : 'var(--day6-red)';
   
   notification.style.cssText = `
       position: fixed;
       top: 100px;
       right: 30px;
       background: ${bgColor};
       color: white;
       padding: 20px 30px;
       border-radius: 25px;
       font-weight: 700;
       z-index: 3001;
       animation: slideInRight 0.3s ease;
       box-shadow: 0 10px 30px rgba(0,0,0,0.3);
       max-width: 300px;
   `;
   notification.textContent = message;
   
   document.body.appendChild(notification);
   
   setTimeout(() => {
       notification.remove();
   }, 3000);
}

// Initialize user authentication on page load
document.addEventListener('DOMContentLoaded', function() {
   checkUserLogin();
   renderProducts();
   updateCartUI();
})
