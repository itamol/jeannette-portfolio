// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// Animación de scroll suave (mejorada)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.skill-card, .timeline-content, .formacion-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar sticky mejorado
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Efecto de hover en tarjetas
document.querySelectorAll('.skill-card, .formacion-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Contador de animación (opcional)
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCount, 30);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });
};

// Cargar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio cargado correctamente');
});

// Validación de formulario (si lo agregamos después)
const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
};

// Detectar tema oscuro del sistema (opcional)
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
    // Aquí podrías agregar lógica para tema oscuro
}

// Evento de redimensionamiento
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});
