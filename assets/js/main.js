// Toggle menú mobile
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (navToggle && menu) {
navToggle.addEventListener('click', () => {
const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
navToggle.setAttribute('aria-expanded', String(!expanded));
menu.style.display = expanded ? 'none' : 'flex';
});
}


// Año dinámico en footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Intercepción del buscador (placeholder -> integrar motor reservas)
const searchForm = document.getElementById('buscar') || document.getElementById('search');
if (searchForm) {
searchForm.addEventListener('submit', (e) => {
e.preventDefault();
// TODO: Integrar con booking-widget.js
const data = new FormData(searchForm);
const params = Object.fromEntries(data.entries());
alert(`Buscando disponibilidad: ${JSON.stringify(params, null, 2)}\n(Conecta tu motor de reservas en booking-widget.js)`);
});
}


// IntersectionObserver para animación simple de aparición
const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add('inview');
});
}) : null;


document.querySelectorAll('section, .card, .why-item, .quote').forEach(el => io && io.observe(el));


// Acceso rápido a WhatsApp en móviles (sticky)
(function(){
const btn = document.createElement('a');
btn.href = 'https://wa.me/573000000000';
btn.target = '_blank';
btn.rel = 'noopener';
btn.className = 'btn sticky-wa';
btn.textContent = 'WhatsApp';
Object.assign(btn.style, {position:'fixed', right:'16px', bottom:'16px', zIndex:60});
document.body.appendChild(btn);
})();
