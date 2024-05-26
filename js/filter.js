import "../components/food-preview.js";
//huudas ajilj ehlehed ehleed
document.addEventListener("DOMContentLoaded", async () => {
    const usp = new URLSearchParams(document.location.search);
    const filterValue = usp.get("category");

    const response = await fetch("http://127.0.0.1:3000/recipe");
    const data = await response.json()
    console.log(data)

    const foodCounts = {};
    data.forEach(item => {
        const count = item.food_recipe.filter(recipeItem => recipeItem.trim() === filterValue).length;
        if (count > 0) {
            foodCounts[item.food_id] = count;
        }
    });
    let maxCount = 0;
    for (const foodId in foodCounts) {
        if (foodCounts[foodId] > maxCount) {
            maxCount = foodCounts[foodId];
        }
    }
    const maxCountFoods = [];
    for (const foodId in foodCounts) {
        if (foodCounts[foodId] === maxCount) {
            maxCountFoods.push(foodId);
        }
    }

    console.log("Max equals value count:", maxCount);
    console.log("Max equals value food:", maxCountFoods);

    let foodsHTMLArray = maxCountFoods.map(item => {
        return `
        <food-preview food_id="${item}">
        </food-preview>`
    })

    document.getElementById("food-filter").innerHTML = foodsHTMLArray;

})