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

// Simple sticky nav interaction or mobile menu could go here
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    alert("Mobile menu toggle");
});
