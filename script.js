const menuButton=document.querySelector('.menu-button');
const navigation=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{if(glow){glow.style.left=`${e.clientX}px`;glow.style.top=`${e.clientY}px`;}});