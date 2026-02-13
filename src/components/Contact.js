export function Contact() {
    return `
    <section id="contact" class="contact reveal">
        <h2 class="title">Контакти</h2>
        <form id="contact-form">
            <input type="text" name="name" placeholder="Ім'я" required>
            <input type="tel" name="phone" placeholder="Номер телефону" required>
            <input type="email" name="email" placeholder="Email" required>
            <textarea name="message" rows="4" placeholder="Повідомлення" required></textarea>
            <button type="submit" class="btn">Надіслати</button>
        </form>
    </section>
  `;
}