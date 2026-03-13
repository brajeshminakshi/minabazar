// scripts/product.js
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productData = {}; // Replace with actual data-fetching logic.

    // Example product data for demonstration
    // This example should be replaced with an actual fetch call or similar to load product data.
    fetch(`https://api.example.com/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            productData = data;
            renderProductDetails(productData);
        });

    function renderProductDetails(product) {
        const mainImage = document.getElementById('main-image');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        mainImage.src = product.images[0];

        // Render thumbnails
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.classList.add('thumbnail');
            thumbnail.addEventListener('click', () => {
                mainImage.src = image;
            });
            thumbnailContainer.appendChild(thumbnail);
        });

        // Setup size and color selection
        const sizeSelector = document.getElementById('size-selector');
        product.sizes.forEach(size => {
            const sizeOption = document.createElement('option');
            sizeOption.value = size;
            sizeOption.innerText = size;
            sizeSelector.appendChild(sizeOption);
        });

        const colorSelector = document.getElementById('color-selector');
        product.colors.forEach(color => {
            const colorOption = document.createElement('option');
            colorOption.value = color;
            colorOption.innerText = color;
            colorSelector.appendChild(colorOption);
        });

        // Generate WhatsApp message
        document.getElementById('whatsapp-button').addEventListener('click', () => {
            const message = `Check out this product: ${product.name}.
Price: ${product.price}.
Details: ${product.description}`;
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});
