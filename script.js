function trackParcel() {
    const textarea = document.querySelector('.input-group textarea');
    const trackingNumbers = textarea.value.trim();

    if (!trackingNumbers) {
        alert("Please enter a waybill number.");
        return;
    }

    // Mock tracking logic
    alert(`Tracking functionality for: ${trackingNumbers}\n(This is a demo frontend)`);
}


// Basic Navigation / Mobile Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    // Toggle functionality (expand if needed)
    alert("Mobile menu toggle");
});

// Video Control (Slow down)
const dropitVideo = document.querySelector('.about-video');
if (dropitVideo) {
    dropitVideo.playbackRate = 0.8; // Slow down a bit
    // To cut the first scene, we would typically set:
    // dropitVideo.currentTime = 2; // e.g. skip first 2 seconds
}

// Hero Slider Logic
const heroSection = document.getElementById('hero-slider');
if (heroSection) {
    // 10 Placeholder Backgrounds since AI generation is rate-limited.
    // In a real scenario, these would be local paths to generated images.
    const heroImages = [
        'https://placehold.co/1920x1080/E60000/FFFFFF?text=Slide+1+Logistics',
        'https://placehold.co/1920x1080/333333/FFFFFF?text=Slide+2+Global',
        'https://placehold.co/1920x1080/FFFFFF/E60000?text=Slide+3+Fast',
        'https://placehold.co/1920x1080/B30000/FFFFFF?text=Slide+4+Secure',
        'https://placehold.co/1920x1080/666666/FFFFFF?text=Slide+5+Delivery',
        'https://placehold.co/1920x1080/E60000/000000?text=Slide+6+Network',
        'https://placehold.co/1920x1080/000000/E60000?text=Slide+7+Express',
        'https://placehold.co/1920x1080/F9F9F9/333333?text=Slide+8+Reliable',
        'https://placehold.co/1920x1080/333333/E60000?text=Slide+9+Care',
        'https://placehold.co/1920x1080/E60000/FFFFFF?text=Slide+10+DropIt'
    ];

    let currentSlide = 0;

    // Preload images to prevent flickering
    heroImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Change background every 3 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % heroImages.length;
        heroSection.style.backgroundImage = `url('${heroImages[currentSlide]}')`;
    }, 3000);
}

// FAQ Accordion Logic
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Toggle active class on the clicked item
        item.classList.toggle('faq-active');

        // Optional: Close other open FAQ items (Accordion style)
        /*
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('faq-active');
            }
        });
        */
    });
});
