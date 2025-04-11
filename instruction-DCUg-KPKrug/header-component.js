class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="style.css">
            <header>
                <nav class="menu">
                    <ul>
                        <li><a href="service-maintenance.html" class="menu-element">Сервисное<br>обслуживание</a></li>
                        <li><a href="replacing-configuring-modules.html" class="menu-element">Замена и настройка<br>модулей</a></li>
                        <li><a href="possible-malfunctions.html" class="menu-element">Возможные<br>неисправности</a></li>
                    </ul>
                </nav>
                <button class="burger" aria-label="Открыть меню" aria-expanded="false">
                    <span class="burger-line"></span>
                </button>
                <a class="image-btn" href="main.html">
                    <img src="img-css/logo-rezerv.png" class="logo-header">
                </a> 
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);