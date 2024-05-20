const params = new URLSearchParams(document.location.search);
const id = params.get("id");

class RecipeFood {
    async Init() {
        try {
            const rs = await fetch("/food.json")
            const response = await rs.json();
            const foods = response.foods;
            const foodRecipeCount = response.foods[0].food_recipe.length;

            

            const selectedFood = foods.find(item => item.food_id == id);


            document.getElementById("food-name").innerText = selectedFood.food_name
            document.getElementById("chef-food").src=selectedFood.image_url
            document.getElementById("time").innerText=selectedFood.time

            document.getElementById("recipe").innerHTML = selectedFood.food_recipe.length

            let lihtml = "";
            selectedFood.food_help.map(item => {
                lihtml += `<li>${item}</li>`
            })
            
            document.getElementById("recipe-food").innerHTML = lihtml
            
        } catch (error) {
            
        }
            
    }
}

const recipeFood = new RecipeFood();
recipeFood.Init();
