class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="style.css">
            <footer>
                <hr class="line-2">
                <div class="footer-content">
                    <a class="image-btn-2" href="https://www.dcug.ru/">
                        <img src="img-css/logo2.png" class="logo-footer">
                    </a>
                    <p class="copyright">Ⓒ1992-2024 ООО НПЦ «Промавтоматика»</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);