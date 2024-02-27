const sections = document.querySelectorAll('.fullscreen');

let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
            
            if (isVisible) {
                scrollToSection(index);
            }
        });
    }
});

function scrollToSection(index) {
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}
