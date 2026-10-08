const menu = document.querySelector('.menu');
const nav = document.querySelector('#navegacao');
const mobile = window.matchMedia('(max-width: 760px)');
menu.hidden = false;
function syncMenu() { nav.hidden = mobile.matches; menu.setAttribute('aria-expanded', String(!nav.hidden)); }
syncMenu();
mobile.addEventListener('change', syncMenu);
menu.addEventListener('click', () => { nav.hidden = !nav.hidden; menu.setAttribute('aria-expanded', String(!nav.hidden)); });
nav.addEventListener('click', event => { if (event.target.closest('a') && mobile.matches) { nav.hidden = true; menu.setAttribute('aria-expanded', 'false'); } });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && mobile.matches && !nav.hidden) { nav.hidden = true; menu.setAttribute('aria-expanded', 'false'); menu.focus(); } });
const filters = document.querySelector('.filters');
filters.hidden = false;
const categories = [...document.querySelectorAll('.product-category')];
function filterProducts(value) {
  let count = 0;
  categories.forEach(section => { section.hidden = value !== 'todos' && section.dataset.category !== value; if (!section.hidden) count += section.querySelectorAll('.card').length; });
  filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === value)));
  document.querySelector('#resultado').textContent = `${count} produtos no catálogo`;
}
filters.addEventListener('click', event => { const button = event.target.closest('button'); if (button) filterProducts(button.dataset.filter); });
filterProducts('todos');

document.querySelectorAll('a[href="#catalogo"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.catalog-details').open = true;
    if (link.dataset.filterTarget) filterProducts(link.dataset.filterTarget);
  });
});
