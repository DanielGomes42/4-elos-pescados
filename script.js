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
    filterProducts(link.dataset.filterTarget || 'todos');
  });
});
