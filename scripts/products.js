// scripts/products.js

// Function to load products from the JSON file
async function loadProducts() {
    const response = await fetch('data/products.json');
    const products = await response.json();
    renderProducts(products);
}

// Function to render products into cards
function renderProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `<h2>${product.title}</h2><p>Tags: ${product.tags.join(', ')}</p><p>Price: $${product.price}</p>`;
        productContainer.appendChild(productCard);
    });
}

// Function to handle search
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) || 
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderProducts(filteredProducts);
}

// Function to filter products by category
function filterByCategory() {
    const category = document.getElementById('category-dropdown').value;
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Add event listeners for search and category filtering
document.getElementById('search-button').addEventListener('click', searchProducts);
document.getElementById('category-dropdown').addEventListener('change', filterByCategory);

// Load the products when the page loads
window.onload = loadProducts;