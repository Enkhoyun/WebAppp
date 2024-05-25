
class mySave extends HTMLElement {
    constructor() {
        super();
        this.bookmarked = false;
        this.food_id = this.getAttribute("f_id");
        this.render();
        this.addEventListener('click', this.toggleBookmark.bind(this));
    }

    render() {
        this.innerHTML = `
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
        }
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-save", mySave);