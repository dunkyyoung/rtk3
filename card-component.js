class CardComponent extends HTMLElement {
    constructor() {
        super();
        // Создание Shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Определяем шаблон для карточки
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card-header {
                    font-size: 1.5em;
                    margin-bottom: 15px;
                    color: #333;
                }
                .card-content {
                    font-size: 1em;
                    color: #555;
                }
            </style>
            <div class="card">
                <div class="card-header">
                    <slot name="header"></slot>
                </div>
                <div class="card-content">
                    <slot name="content"></slot>
                </div>
            </div>
        `;

        // Вставляем содержимое в Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Регистрируем компонент
customElements.define('card-component', CardComponent);
