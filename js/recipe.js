document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");

    class RecipeFood {
        async Init() {
            try {
                const rs = await fetch("/food.json");
                const response = await rs.json();
                const foods = response.foods;
                const selectedFood = foods.find(item => item.food_id == id);

                if (selectedFood) {
                    document.getElementById("food-name").innerText = selectedFood.food_name;
                    document.getElementById("chef-food").src = selectedFood.image_url;
                    document.getElementById("time").innerText = `${selectedFood.time} мин`;

                    let ingredientsHtml = "";
                    selectedFood.food_recipe.forEach(ingredient => {
                        ingredientsHtml += `<li>${ingredient}</li>`;
                    });
                    document.getElementById("recipe").innerHTML = ingredientsHtml;

                    let instructionsHtml = "";
                    selectedFood.food_help.forEach(step => {
                        instructionsHtml += `<li>${step}</li>`;
                    });
                    document.getElementById("recipe-instructions").innerHTML = instructionsHtml;
                } else {
                    console.error('Recipe not found');
                    document.getElementById("food-name").innerText = "Recipe not found";
                }
            } catch (error) {
                console.error('Error fetching recipe data:', error);
            }
        }
    }

    const recipeFood = new RecipeFood();
    recipeFood.Init();
});
