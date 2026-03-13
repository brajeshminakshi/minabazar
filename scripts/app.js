// Global Configuration for MINABAZAR
const CONFIG = {
    BRAND_NAME: 'MINABAZAR',
    WHATSAPP_NUMBER: '+919000000000',
    CALL_NUMBER: '+919000000000',
    CITY_NAME: 'YourCityName'  // Replace with actual city name
};

// Utility Functions

// Function to parse URL parameters
function getURLParameter(name) {
    name = name.replace(/[]/g, '');
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to format price
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);
}

// Function to generate WhatsApp message
function generateWhatsAppMessage(message) {
    return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export { CONFIG, getURLParameter, formatPrice, generateWhatsAppMessage };