document.getElementById('dropdownToggle').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const shadowOverlay = document.querySelector('.shadow-overlay');

    if (dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
        shadowOverlay.classList.remove('active');
        setTimeout(() => {
            dropdownMenu.style.display = 'none';
        }, 300);
    } else {
        dropdownMenu.style.display = 'block';
        shadowOverlay.classList.add('active');
        setTimeout(() => {
            dropdownMenu.classList.add('active');
        }, 10);
    }
});

document.querySelector('.shadow-overlay').addEventListener('click', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const shadowOverlay = document.querySelector('.shadow-overlay');
    
    dropdownMenu.classList.remove('active');
    shadowOverlay.classList.remove('active');
    setTimeout(() => {
        dropdownMenu.style.display = 'none';
    }, 300);
});
