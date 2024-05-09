class RecipeFood {
    async Init() {
        try {
            const response = await fetch("food.json"); // Fetch the JSON file
            const recipes = await response.json(); // Parse JSON data

            let html = ""; // Initialize an empty string to store HTML

            // Loop through each food item in the JSON
            recipes.foods.forEach(food => {
                // Generate HTML for each food item
                html += `
                    <div class="food-item">
                        <h2>${food.food_name}</h2>
                        <p>Author: ${food.author}</p>
                        <p>Time: ${food.time} minutes</p>
                        <p>Ingredients:</p>
                        <ul>
                `;

                // Loop through each ingredient in the food recipe
                food.food_recipe.forEach(ingredient => {
                    html += `<li>${ingredient}</li>`; // Append ingredient to the HTML
                });

                // Add more information and close the HTML tags
                html += `
                        </ul>
                        <p>Instructions: ${food.food_help}</p>
                        <img src="${food.image_url}" alt="${food.food_name}" style="max-width: 200px;">
                    </div>
                `;
            });

            // Replace the content of the food-container div with the generated HTML
            document.getElementById("food-container").innerHTML = html;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

// Initialize the RecipeFood component
const recipeFood = new RecipeFood();
recipeFood.Init();
