// Load food data once and store it globally
let foodData = [];

async function loadFoodData() {
    const response = await fetch('/food.json');
    const data = await response.json();
    foodData = data.foods;
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadFoodData();

    document.getElementById('filter-button').addEventListener('click', () => {
        // Fetch all selected filters
        const meatOptions = Array.from(document.querySelectorAll('.column:nth-child(1) .option input:checked')).map(el => el.parentElement.textContent.trim());
        const fruitOptions = Array.from(document.querySelectorAll('.column:nth-child(2) .option input:checked')).map(el => el.parentElement.textContent.trim());
        const noodleOptions = Array.from(document.querySelectorAll('.column:nth-child(3) .option input:checked')).map(el => el.parentElement.textContent.trim());

        // Filter recipes based on the selected options
        const filteredFoods = foodData.filter(food => {
            const hasMeat = meatOptions.length === 0 || meatOptions.some(option => food.food_recipe.includes(option));
            const hasFruit = fruitOptions.length === 0 || fruitOptions.some(option => food.food_recipe.includes(option));
            const hasNoodle = noodleOptions.length === 0 || noodleOptions.some(option => food.food_recipe.includes(option));
            return hasMeat && hasFruit && hasNoodle;
        });

        // Clear existing food previews
        const foodPreviewsContainer = document.getElementById('food-previews');
        foodPreviewsContainer.innerHTML = '';

        // Add filtered food previews
        filteredFoods.forEach(food => {
            const foodPreview = document.createElement('food-preview');
            foodPreview.setAttribute('food_id', food.food_id);
            foodPreviewsContainer.appendChild(foodPreview);
        });
    });
});
