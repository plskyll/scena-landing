export function Contact() {
    return `
    <section id="contact" class="contact reveal">
        <h2 class="title">Контакти</h2>
        <form id="contact-form">
            <input placeholder="Ім'я" required>
            <input placeholder="Email" required>
            <textarea rows="4" placeholder="Повідомлення"></textarea>
            <button type="submit" class="btn">Надіслати</button>
        </form>
    </section>
  `;
}