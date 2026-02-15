export function Navigation() {
    return `
    <nav>
        <h2>Театр Тіней</h2>
        
        <div class="burger" id="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul id="nav-links">
            <li><a href="#about" class="nav-link">Про нас</a></li>
            <li><a href="#courses" class="nav-link">Курси</a></li>
            <li><a href="#gallery" class="nav-link">Галерея</a></li>
            <li><a href="#contact" class="nav-link">Контакти</a></li>
        </ul>
    </nav>
  `;
}