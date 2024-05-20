
class FoodPreview extends window.HTMLElement {

    constructor () {
        super()
        this.food_id = this.getAttribute("food_id");
        
    }

    async connectedCallback() {
        const data = await fetch("/food.json");
        const recievedData = await data.json();

        const food = recievedData.foods.find(item => item.food_id == this.food_id)

        this.innerHTML = `
        <style>
        a{
            color:black;
        }
        img {
            border-radius: 40px;
            padding-top:10px;
            width: 200px;
            height: 200px;
            transition: all 0.25s ease;
        }
            .item{
                width:100%;
                max-width: 270px;
                transition: all 0.25s ease;
            }
            
            .name {
                padding-top: 9px;
               
                border: 1px;
                border-radius: 30px;
                width: 100%;
                height: 50px;
                background-color: var(--color-foodname);
                text-align: center;
                font-family: var(--font-addDescription);
                font-size: 25px;
                font-style: italic;
            }
        </style>
        <div class="item">
        <a href="foodrecipe.html?id=${food.food_id}">
                <p class="name">${food.food_name}</p>
                <img src=${food.image_url} alt="Food photo">
                <my-like count="36">
                </a>
                <my-save f_id=${food.food_id}></my-save>

            </div>
        `
    }



}
window.customElements.define('food-preview', FoodPreview)

