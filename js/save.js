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
                    background-color: rgb(14,16,41);
                    height: 100vh;
                    transition: 0.5s;
                    overflow: hidden;
                }

                .card h1 {
                    color: white;
                    font-weight: 100;
                    margin: 0;
                    padding: 0 20px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                }

                .listCard {
                    overflow-y: auto;
                    height: calc(100vh - 150px); /* Adjusted height to leave space for header and footer */
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .card .checkout {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }

                .card .checkout div {
                    background-color: rgb(247,216,165);
                    width: 100%;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    cursor: pointer;
                }

                .card .checkout div:nth-child(2) {
                    background-color: white;
                    color: black;
                }

                .card.active {
                    left: calc(100% - 500px);
                }
            </style>
            <div class="card ${this.foods.size ? 'active' : ''}">
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
        if (this.foods.has(food_id)) {
            this.foods.delete(food_id);
        } else {
            this.foods.set(food_id, food_id);
        }
        this.render();
        document.querySelector('.quantity').textContent = this.foods.size;
    }

    closeCard() {
        this.shadowRoot.querySelector('.card').classList.remove('active');
    }
}

class mySave extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.bookmarked = false;
        this.food_id = this.getAttribute("f_id");
        this.render();
        this.addEventListener('click', this.toggleBookmark.bind(this));
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="save">
                <i class="${this.bookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
            </div>
        `;
    }

    toggleBookmark() {
        this.bookmarked = !this.bookmarked;
        this.render();
        const saveNav = document.querySelector("save-element");
        if (saveNav) {
            saveNav.savedFood(this.food_id);
            setCookie("bookmarked_food", this.food_id, 30); 
        }
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("save-element", Save);
customElements.define("my-save", mySave);
