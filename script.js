// ========================================
// KBeautySeol - Korean Skincare Website
// JavaScript
// ========================================

// Generate 1000+ Korean Skincare Products
const productNames = [
    // Face Masks
    "Hydrating Face Mask", "Snail Repair Cream", "Glass Skin Serum", "Korean Hydrating Toner", "Collagen Sheet Mask",
    "Aloe Vera Sheet Mask", "Green Tea Clay Mask", "Honey Moisturizing Mask", "Rose Petal Mask", "Pearl Brightening Mask",
    "Vitamin C Clay Mask", "Charcoal Purifying Mask", "Centella Soothing Mask", "Propolis Healing Mask", "Rice Water Brightening Mask",
    "Blueberry Anti-Aging Mask", "Cucumber Cooling Mask", "Strawberry Exfoliating Mask", "Grape Resveratrol Mask", "Tea Tree Oil Mask",
    "Hyaluronic Acid Mask", "Collagen Plumping Mask", "Snail Mucin Mask", "Bee Venom Mask", "Gold Firming Mask",
    "Silk Protein Mask", "Lotus Seed Mask", "Mugwort Calming Mask", "Bamboo Water Mask", "Chrysanthemum Mask",
    "Ginseng Revitalizing Mask", "White Truffle Mask", "Black Pearl Mask", "Diamond Dust Mask", "Ruby Regeneration Mask",
    "Emerald Hydration Mask", "Sapphire Oil Control Mask", "Amethyst Soothing Mask", "Opal Glow Mask", "Aquamarine Fresh Mask",
    // Serums
    "Niacinamide Serum", "Hyaluronic Acid Serum", "Vitamin C Serum", "Retinol Serum", "Peptide Serum",
    "Snail Mucin Essence", "Propolis Serum", "Green Tea Serum", "Rice Bran Serum", "Ginseng Serum",
    "Bee Propolis Serum", "Galaxy Serum", "Placenta Serum", "EGF Serum", "B5 Serum",
    "Alpha Arbutin Serum", "Tranexamic Acid Serum", "Azelaic Acid Serum", "Centella Serum", "Bakuchiol Serum",
    "Glycerin Serum", "Squalane Serum", "Rosehip Serum", "Tea Tree Serum", "Licorice Serum",
    "Madecassoside Serum", "Asiaticoside Serum", "Panthenol Serum", "Allantoin Serum", "Ceramides Serum",
    // Toners
    "Balancing Toner", "Exfoliating Toner", "Hydrating Toner", "Soothing Toner", "Brightening Toner",
    "Pore Minimizing Toner", "Oil Control Toner", "pH Balancing Toner", "Milky Toner", "Essence Toner",
    "Rose Water Toner", "Witch Hazel Toner", "Green Tea Toner", "Aloe Toner", "Cucumber Toner",
    "Rice Water Toner", "Ginseng Toner", "Chamomile Toner", "Lavender Toner", "Jojoba Toner",
    // Moisturizers
    "Daily Moisturizer", "Night Cream", "Day Cream", "Gel Cream", "Water Cream",
    "Barrier Cream", "Recovery Cream", "Firming Cream", "Whitening Cream", "Acne Cream",
    "Sensitive Cream", "Dry Skin Cream", "Oily Skin Cream", "Combination Cream", "Normal Skin Cream",
    "Anti-Aging Cream", "Filler Cream", "Volumizing Cream", "Lifting Cream", "Contouring Cream",
    // Cleansers
    "Foaming Cleanser", "Gel Cleanser", "Oil Cleanser", "Cream Cleanser", "Milk Cleanser",
    "Powder Cleanser", "Bar Cleanser", "Clay Cleanser", "Charcoal Cleanser", "Salt Cleanser",
    "Enzyme Cleanser", "Micellar Cleanser", "Jelly Cleanser", "Balm Cleanser", "Water Cleanser",
    // Eye Creams
    "Eye Cream", "Eye Gel", "Eye Serum", "Eye Mask", "Eye Patch",
    "Firming Eye Cream", "Brightening Eye Cream", "Anti-Puffiness Eye Cream", "Dark Circle Eye Cream", "Hydrating Eye Cream",
    "Retinol Eye Cream", "Peptide Eye Cream", "Caffeine Eye Cream", "Vitamin C Eye Cream", "Collagen Eye Cream",
    // Sunscreens
    "SPF50 Sunscreen", "SPF30 Sunscreen", "SPF40 Sunscreen", "SPF45 Sunscreen", "SPF60 Sunscreen",
    "Invisible Sunscreen", "White Cast Sunscreen", "Tinted Sunscreen", "Cushion Sunscreen", "Mist Sunscreen",
    "Gel Sunscreen", "Cream Sunscreen", "Stick Sunscreen", "Powder Sunscreen", "Water Sunscreen",
    // Essences
    "First Essence", "Treatment Essence", "Emulsion", "Mist Essence", "Sleeping Essence",
    "Ferment Essence", "Rice Essence", "Yeast Essence", "Bifida Essence", "Galactomyces Essence",
    // Ampoules
    "Intensive Ampoule", "Hydrating Ampoule", "Brightening Ampoule", "Anti-Aging Ampoule", "Troubleshooting Ampoule",
    "Spot Correcting Ampoule", "Pore Ampoule", "Acne Ampoule", "Scar Ampoule", "Wrinkle Ampoule",
    // Sheet Masks
    "Moisture Sheet Mask", "Vitality Sheet Mask", "Repair Sheet Mask", "Glow Sheet Mask", "Calm Sheet Mask",
    "Firm Sheet Mask", "Brighten Sheet Mask", "Lift Sheet Mask", "Nourish Sheet Mask", "Pure Sheet Mask",
    // Lip Products
    "Lip Balm", "Lip Mask", "Lip Serum", "Lip Cream", "Lip Tint",
    "Lip Oil", "Lip Scrub", "Lip Plumper", "Lip Base", "Lip Primer",
    // Hair Care
    "Hair Serum", "Hair Mask", "Hair Essence", "Hair Spray", "Hair Tonic",
    "Scalp Serum", "Scalp Mask", "Scalp Toner", "Scalp Scrub", "Hair Oil",
    // Body Care
    "Body Lotion", "Body Cream", "Body Butter", "Body Oil", "Body Mist",
    "Body Scrub", "Body Serum", "Hand Cream", "Foot Cream", "Neck Cream"
];

const brands = ["Cosrx", "Innisfree", "Etude House", "Laneige", "Sulwhasoo", "Holika", "Dear Klairs", "Missha", "Tony Mory", "Nature Republic", "The Face Shop", "Dr.Jart+", "A'PIEU", "Benton", "Beauty of Joseon", "iUNIK", "Purito", "Pyunkang Yul", "Klavuu", "ROMAND", "Clio", "Peripera", "Lilybyred", "3CE", "Mamonde", "Primera", "Hanyul", "O HUI", "Whoo", "IOPE", "HERA", "SU:M37", "Ohui", "The History of Whoo", "SK-II", "Shiseido", "Kose", "Biore", "Mentholatum", "Hada Labo", "Kikumasamune", "Melano CC", "Skin Aqua", "CeraVe", "Paula's Choice", "The Ordinary", "Drunk Elephant", "Sunday Riley", "Tatcha"];

const images = [
    "https://images.pexels.com/photos/3764645/pexels-photo-3764645.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/39351/cosmetics-cosmetology-face-cream-macro-39351.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg?auto=compress&cs=tinysrgb&w=400"
];

// Generate 1050 products (more than 1000)
const products = [];
let id = 1;

for (let i = 0; i < 1050; i++) {
    const nameIndex = i % productNames.length;
    const brandIndex = Math.floor(Math.random() * brands.length);
    const imageIndex = i % images.length;
    const variant = Math.floor(i / productNames.length);
    
    const basePrice = 5 + Math.floor(Math.random() * 95); // $5-$100
    const price = variant > 0 ? basePrice + (variant * 2) : basePrice;
    
    products.push({
        id: id++,
        name: variant > 0 ? `${productNames[nameIndex]} ${variant + 1}` : productNames[nameIndex],
        brand: brands[brandIndex],
        price: price,
        originalPrice: price + Math.floor(Math.random() * 10) + 1,
        image: images[imageIndex],
        category: ["Face Mask", "Serum", "Toner", "Moisturizer", "Cleanser", "Eye Cream", "Sunscreen", "Essence", "Ampoule", "Sheet Mask", "Lip Care", "Hair Care", "Body Care"][Math.floor(Math.random() * 13)],
        rating: (3.5 + Math.random() * 1.5).toFixed(1),
        reviews: Math.floor(Math.random() * 500) + 10,
        inStock: Math.random() > 0.1,
        isNew: Math.random() > 0.8,
        isHot: Math.random() > 0.9
    });
}

// Pagination state
let currentPage = 1;
const productsPerPage = 24;
let filteredProducts = [...products];

// Cart State
let cart = JSON.parse(localStorage.getItem('kbeautyseol_cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const modalClose = document.getElementById('modalClose');
const checkoutForm = document.getElementById('checkoutForm');
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmation = document.getElementById('closeConfirmation');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const orderItems = document.getElementById('orderItems');
const orderTotalEl = document.getElementById('orderTotal');

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    initAnimations();
    initEventListeners();
    startLivePriceUpdates();
    
    // Hide loader after page load
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});

// ========================================
// Render Products with Pagination
// ========================================

function renderProducts() {
    if (!productsGrid) return;
    
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = filteredProducts.slice(start, end);
    
    productsGrid.innerHTML = pageProducts.map((product) => `
        <div class="product-card glass-card" data-id="${product.id}">
            <div class="product-badges">
                ${product.isNew ? '<span class="badge badge-new">NEW</span>' : ''}
                ${product.isHot ? '<span class="badge badge-hot">HOT</span>' : ''}
                ${product.originalPrice > product.price ? '<span class="badge badge-sale">SALE</span>' : ''}
            </div>
            <div class="product-image">
                <div class="product-glow"></div>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <span>${product.rating}</span>
                    <span class="review-count">(${product.reviews})</span>
                </div>
                <div class="product-price-container">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice > product.price ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas ${product.inStock ? 'fa-plus' : 'fa-times'}"></i>
                    ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    `).join('');
    
    // Add pagination
    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginationContainer = document.getElementById('paginationContainer');
    
    if (!paginationContainer) {
        // Create pagination container if not exists
        const pagination = document.createElement('div');
        pagination.id = 'paginationContainer';
        pagination.className = 'pagination-container';
        productsGrid.parentElement.appendChild(pagination);
    }
    
    const pagination = document.getElementById('paginationContainer');
    let paginationHTML = '';
    
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
    </button>`;
    
    for (let i = 1; i <= Math.min(totalPages, 10); i++) {
        paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    
    if (totalPages > 10) {
        paginationHTML += `<span class="page-ellipsis">...</span>`;
        paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
    </button>`;
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// Live Price Updates
// ========================================

function startLivePriceUpdates() {
    setInterval(() => {
        // Simulate live price fluctuations for random products
        products.forEach((product) => {
            if (Math.random() > 0.85) {
                const fluctuation = (Math.random() - 0.5) * 3; // -$1.50 to +$1.50
                product.price = Math.max(5, Math.round((product.price + fluctuation) * 100) / 100);
            }
        });
        
        // Update display
        renderProducts();
        
        // Also update cart prices if open
        updateCart();
    }, 3000); // Update every 3 seconds
}

// ========================================
// Cart Functions
// ========================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < 10) {
            existingItem.quantity++;
        }
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCart();
    
    // Button animation
    const btn = event.target.closest('.add-to-cart-btn');
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i> Added';
    
    // Cart icon bounce
    cartBtn.classList.add('bounce');
    setTimeout(() => {
        cartBtn.classList.remove('bounce');
    }, 500);
    
    setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<i class="fas fa-plus"></i> Add to Cart';
    }, 1500);
    
    // Open cart
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            item.quantity = 1;
        }
        if (item.quantity > 10) {
            item.quantity = 10;
        }
    }
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem('kbeautyseol_cart', JSON.stringify(cart));
}

function updateCart() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    // Render cart items
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-brand">${item.brand}</p>
                    <p class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
    if (orderTotalEl) orderTotalEl.textContent = `$${total.toFixed(2)}`;
    
    // Update order summary
    updateOrderSummary();
}

function updateOrderSummary() {
    if (!orderItems) return;
    
    if (cart.length === 0) {
        orderItems.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No items</p>';
    } else {
        orderItems.innerHTML = cart.map(item => `
            <div class="order-item">
                <span>${item.name} × ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }
}

// ========================================
// Cart Sidebar Functions
// ========================================

function openCart() {
    if (!cartSidebar || !cartOverlay) return;
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    if (!cartSidebar || !cartOverlay) return;
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// Modal Functions
// ========================================

function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    updateOrderSummary();
    if (!checkoutModal) return;
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    if (!checkoutModal) return;
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function openConfirmationModal() {
    if (!checkoutModal || !confirmationModal) return;
    checkoutModal.classList.remove('active');
    confirmationModal.classList.add('active');
}

function closeConfirmationModal() {
    if (!confirmationModal) return;
    confirmationModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear cart after successful order
    cart = [];
    saveCart();
    updateCart();
    closeCart();
}

// ========================================
// Checkout & Telegram Integration
// ========================================

async function sendToTelegram(formData) {
    const botToken = 'YOUR_BOT_TOKEN'; // Replace with actual bot token
    const chatId = '@kbeautyseol'; // Or use numeric chat ID
    
    const orderDetails = cart.map(item => 
        `Product: ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const message = `New Order - KBeautySeol
${orderDetails}
Total: $${total.toFixed(2)}
Customer Name: ${formData.customerName}
Country: ${formData.country}
Telegram Username: @${formData.telegramUsername}`;
    
    // Try to send via Telegram API
    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            console.log('Order sent to Telegram successfully');
        } else {
            console.log('Telegram API error, but order recorded locally');
        }
    } catch (error) {
        console.log('Telegram API not configured, order recorded locally');
    }
    
    // Also log to console for testing
    console.log('===== NEW ORDER =====');
    console.log(message);
    console.log('=====================');
}

if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            customerName: document.getElementById('customerName').value,
            country: document.getElementById('country').value,
            telegramUsername: document.getElementById('telegramUsername').value
        };
        
        // Show loading state
        const submitBtn = checkoutForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Send to Telegram
        await sendToTelegram(formData);
        
        // Show confirmation
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        openConfirmationModal();
        checkoutForm.reset();
    });
}

// ========================================
// Event Listeners
// ========================================

function initEventListeners() {
    // Cart button
    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (cartClose) cartClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    
    // Checkout
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
    if (modalClose) modalClose.addEventListener('click', closeCheckoutModal);
    if (checkoutModal) checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeCheckoutModal();
    });
    
    // Confirmation
    if (closeConfirmation) closeConfirmation.addEventListener('click', closeConfirmationModal);
    if (confirmationModal) confirmationModal.addEventListener('click', (e) => {
        if (e.target === confirmationModal) closeConfirmationModal();
    });
    
    // Mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Mobile nav links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCheckoutModal();
            closeConfirmationModal();
            closeCart();
            if (mobileMenu) mobileMenu.classList.remove('active');
        }
    });
}

// ========================================
// GSAP Animations
// ========================================

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-title-line', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-title-sub', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-subtitle', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-buttons', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.scroll-indicator', {
            y: 10,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.3');
    
    // Featured cards animation
    gsap.from('.featured-card', {
        scrollTrigger: {
            trigger: '.featured',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Products animation
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // Trending section
    gsap.from('.trending-card', {
        scrollTrigger: {
            trigger: '.trending',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Contact section
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Footer
    gsap.from('.footer-content', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Telegram float animation
    gsap.from('.telegram-float', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            toggleActions: 'play none none none'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 2,
        ease: 'back.out(1.7)'
    });
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.changePage = changePage;

