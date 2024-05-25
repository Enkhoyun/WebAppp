
let foodData = [];

async function loadFoodData() {
    const response = await fetch('/recipe.json');
    const data = await response.json();
    foodData = data.foods;
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadFoodData();

    document.getElementById('filter-button').addEventListener('click', () => {
        const meatOptions = Array.from(document.querySelectorAll('.column:nth-child(1) .option input:checked')).map(el => el.parentElement.textContent.trim());
        const fruitOptions = Array.from(document.querySelectorAll('.column:nth-child(2) .option input:checked')).map(el => el.parentElement.textContent.trim());
        const noodleOptions = Array.from(document.querySelectorAll('.column:nth-child(3) .option input:checked')).map(el => el.parentElement.textContent.trim());
        const filteredFoods = foodData.filter(food => {
            const hasMeat = meatOptions.some(option => food.food_recipe.includes(option));
            const hasFruit = fruitOptions.some(option => food.food_recipe.includes(option));
            const hasNoodle =  noodleOptions.some(option => food.food_recipe.includes(option));
            return hasMeat && hasFruit && hasNoodle;
        });

        const foodPreviewsContainer = document.getElementById('food-previews');
        foodPreviewsContainer.innerHTML = '';

        filteredFoods.forEach(food => {
            const foodPreview = document.createElement('food-preview');
            foodPreview.setAttribute('food_id', food.food_id);
            foodPreviewsContainer.appendChild(foodPreview);
        });
    });
});
