class Like extends HTMLElement {
    constructor() {
        super();
        this.count = parseInt(this.getAttribute("count"));
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="leaf-icons">
                ${this.generate()}
                <div class="reaction">
    
                </div>
            </div>
        `;
    }

    generate() {
        let leafHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= this.count) {
                leafHtml += `<i class="leaf${i}"></i>`;
            }
        }
        return leafHtml;
    }
}

customElements.define("my-like", Like);
