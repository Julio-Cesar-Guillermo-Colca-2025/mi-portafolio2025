document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('expanded-img');
    const captionText = document.getElementById('image-caption');
    const closeBtn = document.querySelector('.close-modal');
    const images = document.querySelectorAll('.gallery-img');
    
    // Abrir modal al hacer clic en imagen
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });
    
    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar al hacer clic fuera de la imagen
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});