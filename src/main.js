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

// Reveal animation
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

// Scroll hero button
const scrollBtn = document.getElementById('hero-btn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Notification
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

// Slider
const track = document.getElementById('slider-track');
const sliderImages = document.querySelectorAll('.slides img');
const nextBtn = document.getElementById('next-slide');
const prevBtn = document.getElementById('prev-slide');

let slideIndex = 1;

if (track && sliderImages.length > 0) {
    track.style.transition = 'none';
    track.style.transform = `translateX(-100%)`;

    const updateSlider = (withAnimation = true) => {
        track.style.transition = withAnimation ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        track.style.transform = `translateX(-${slideIndex * 100}%)`;
    };

    track.addEventListener('transitionend', () => {
        if (slideIndex === sliderImages.length - 1) {
            slideIndex = 1;
            updateSlider(false);
        }
        if (slideIndex === 0) {
            slideIndex = sliderImages.length - 2;
            updateSlider(false);
        }
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (slideIndex >= sliderImages.length - 1) return;
            slideIndex++;
            updateSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (slideIndex <= 0) return;
            slideIndex--;
            updateSlider();
        });
    }
}

// EmailJS
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
                showNotification("Заявку успішно надіслано!", "success");
                form.reset();
            }, (error) => {
                showNotification("Помилка відправки.", "error");
            })
            .finally(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            });
    });
}

// Mobile menu
const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-links');
const navLinks = document.querySelectorAll('.nav-link');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
}