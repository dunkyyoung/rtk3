class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Используем Shadow DOM
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                ${this.getStyles()}
            </style>
            <div class="card">
                <header>
                    <slot name="header">Заголовок по умолчанию</slot>
                </header>
                <div class="content">
                    <slot name="content">Содержание по умолчанию</slot>
                </div>
            </div>
        `;
    }

    getStyles() {
        return `
            /* Стили для карточки */
            .card {
                display: block;
                max-width: 350px;
                margin: 20px;
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 10px;
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }

            header {
                font-size: 1.5em;
                margin-bottom: 10px;
                color: #333;
            }

            .content {
                font-size: 1em;
                color: #555;
            }

            img {
                max-width: 100%;
                height: auto;
                margin-top: 10px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
        `;
    }
}

// Регистрируем компонент
customElements.define('card-component', CardComponent);
