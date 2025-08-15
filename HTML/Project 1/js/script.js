/* Note: As i earlier declared in index.html. This JS file is AI Generated and only HTML was written by me */
// Handle category tab switching
document.querySelectorAll('input[name="type"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('label[for]').forEach(label => {
            label.style.borderBottom = 'none';
            label.style.color = '#1c1c1c';
        });
        const activeLabel = document.querySelector(`label[for="${radio.id}"]`);
        activeLabel.style.borderBottom = '2px solid #ef4f5f';
        activeLabel.style.color = '#ef4f5f';
    });
});

// Simulate search bar behavior
const searchInput = document.querySelector('header input[type="text"]');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            alert(`Searching for "${searchInput.value}"...`);
        }
    }
});

// Click on food/brand images
document.querySelectorAll('.food-grid img, .brand-grid img').forEach(img => {
    img.addEventListener('click', () => {
        alert(`You clicked on "${img.alt}"`);
    });
});

// Smooth scroll for explore buttons (optional)
document.querySelectorAll('main button').forEach(btn => {
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});
