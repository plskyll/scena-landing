import './style.css';
import emailjs from '@emailjs/browser';

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
    <div id="notification-area" class="notification-container"></div>
`;

const reveals = document.querySelectorAll(".reveal");

function handleScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", handleScroll);
handleScroll();

const scrollBtn = document.getElementById('hero-btn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

function showNotification(message, type = 'success') {
    const container = document.getElementById('notification-area');
    const toast = document.createElement('div');

    toast.className = `toast ${type}`;
    toast.innerText = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s ease forwards';
        toast.addEventListener('animationend', () => toast.remove());
    }, 4000);
}

emailjs.init("_PmMxsV5nDhXBAcYr");

const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "Надсилання...";
        btn.disabled = true;

        emailjs.sendForm('service_hrqwh8q', 'template_1x3vpqe', this)
            .then(() => {
                showNotification("Заявку успішно надіслано! Ми зв'яжемося з вами.", "success");
                form.reset();
            }, (error) => {
                console.error('EmailJS Error:', error);
                showNotification("Помилка відправки. Спробуйте ще раз.", "error");
            })
            .finally(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            });
    });
}