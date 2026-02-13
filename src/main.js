import './style.css';

import { Navigation } from './components/Navigation.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Courses } from './components/Courses.js';
import { Gallery } from './components/Gallery.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
    ${Navigation()}
    ${Hero()}
    ${About()}
    ${Courses()}
    ${Gallery()}
    ${Contact()}
    ${Footer()}
`;

const reveals = document.querySelectorAll(".reveal");

function handleScroll() {
    reveals.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", handleScroll);
handleScroll();

const scrollBtn = document.getElementById('btn-scroll');
if(scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    });
}

const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Заявку відправлено!");
        form.reset();
    });
}