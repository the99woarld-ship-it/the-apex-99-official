
const menu=document.querySelector('.menu'), nav=document.querySelector('nav');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
if(nav){const s=document.createElement('style');s.textContent='nav.open{display:flex}';document.head.appendChild(s)}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
