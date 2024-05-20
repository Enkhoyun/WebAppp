class Save extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.foods = new Map();
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    position: fixed;
                    top: 0;
                    left: 100%;
                    width: 500px;
                    background-color: #453E3B;
                    height: 100vh;
                    transition: 0.5s;
                }

                .card h1 {
                    color: #E8BC0E;
                    font-weight: 100;
                    margin: 0;
                    padding: 0 20px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                }

                .card .checkout {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }

                .card .checkout div {
                    background-color: #E8BC0E;
                    width: 100%;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    cursor: pointer;
                }

                .card .checkout div:nth-child(2) {
                    background-color: #1C1F25;
                    color: #fff;
                }

                .active .card {
                    left: calc(100% - 500px);
                }
            </style>
            <div class="card">
                <h1>Хадгалсан хоолнууд</h1>
                <ul class="listCard">
                    ${Array.from(this.foods.values()).map(food_id => `
                        <food-preview food_id="${food_id}"></food-preview>
                    `).join('')}
                </ul>
                <div class="checkout">
                    <div class="total">${this.foods.size}</div>
                    <div class="unSave">Close</div>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('.unSave').addEventListener('click', this.closeCard.bind(this));
    }

    savedFood(food_id) {
        this.foods.set(food_id, food_id);
        this.render();
    }

    closeCard() {
        this.shadowRoot.querySelector('.card').style.left = '100%';
    }
}

customElements.define("save-element", Save);
