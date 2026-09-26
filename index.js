const nav = document.querySelector('nav');
const sentinel = document.querySelector('#nav-sentinel');

new IntersectionObserver(([entry]) => {
  nav.classList.toggle('at-top', !entry.isIntersecting);
}).observe(sentinel);