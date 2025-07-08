document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Puedes añadir lógica para un menú de hamburguesa si lo implementas
    // const mobileMenuButton = document.querySelector('.mobile-menu-button');
    // const navMenu = document.querySelector('nav ul');

    // if (mobileMenuButton) {
    //     mobileMenuButton.addEventListener('click', function() {
    //         navMenu.classList.toggle('active');
    //     });
    // }

    // Puedes añadir animaciones sutiles al scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2 // Cuando el 20% de la sección es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Añade una clase para animación
                observer.unobserve(entry.target); // Deja de observar una vez que se activa
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-in-initial'); // Clase inicial para ocultar antes de la animación
        observer.observe(section);
    });

    // Añadir estilo CSS para las animaciones:
    // .fade-in-initial { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
    // .fade-in { opacity: 1; transform: translateY(0); }

    console.log("Mussikon Website: DOM Content Loaded and Script Running!");
});