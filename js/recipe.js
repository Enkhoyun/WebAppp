document.addEventListener('DOMContentLoaded', async () => {
    try {
        const params = new URLSearchParams(document.location.search);
        const id = params.get("id");
        const rs = await fetch("/food.json");
        const response = await rs.json();
        const foods = response.foods;
        const selectedFood = foods.find(item => item.food_id == id);

        if (selectedFood) {
            document.getElementById("food-name").innerText = selectedFood.food_name;
            document.getElementById("comment-recipe").innerText = selectedFood.comment;
            document.getElementById("chef-food").src = selectedFood.image_url;
            document.getElementById("time").innerText = `${selectedFood.time} мин`;
            document.getElementById("ports").innerText = selectedFood.ports;
            
            let ingredientsHtml = "";
            selectedFood.food_recipe.forEach(ingredient => {
                ingredientsHtml += `<li>${ingredient}</li>`;
            });
            document.getElementById("recipe-ingredients").innerHTML = ingredientsHtml;

            let instructionsHtml = "";
            selectedFood.food_help.forEach(step => {
                instructionsHtml += `<li>${step}</li>`;
            });
            document.getElementById("recipe-instructions").innerHTML = instructionsHtml;

            document.getElementById("recipe-count").innerText = selectedFood.food_recipe.length;
        } 
    } catch (error) {
        console.error('Error fetching recipe data:', error);
    }
});
