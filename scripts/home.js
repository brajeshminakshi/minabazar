// Import GSAP for animations
import { gsap } from 'gsap';

// Document Load Event
document.addEventListener('DOMContentLoaded', () => {
    // Hero Title Animation
    gsap.from('.hero-title', { 
        duration: 1.5, 
        y: -100, 
        opacity: 0, 
        ease: 'bounce' 
    });

    // Subtext Animation
    gsap.from('.hero-subtext', { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        delay: 0.5, 
        ease: 'power2.out' 
    });

    // Featured Product Cards Entrance Animation
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        gsap.from(card, { 
            duration: 1, 
            y: 100,
            opacity: 0,
            delay: index * 0.3,
            ease: 'power2.out' 
        });
    });

    // Card Hover Effect
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
                scale: 1.05, 
                duration: 0.3 
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                scale: 1, 
                duration: 0.3 
            });
        });
    });
});
