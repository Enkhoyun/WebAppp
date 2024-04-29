class Choosenfoods {
    async Init() {
        const data = await fetch("/food.json");
        const receivedData = await data.json();
        const search = document.getElementById("search");
        const searchbtn = document.getElementById("search-btn");
        const container = document.getElementById("searched-food-article");
        let html = ``;

        searchbtn.addEventListener('click', () => {

            html=``
            const searchedFoods = receivedData.foods.filter(item => item.food_name == search.value);

            searchedFoods.map(item => {
                html += `<food-preview food_id="${item.food_id}"></food-preview>`;
                console.log(item);
            });

            container.innerHTML = html;
        });

        const fastestFoodContainer = document.getElementById("fastest-food-container");
      

        const fastestFood = receivedData.foods.sort((a, b) => a.time - b.time);
        let a = 0;
        fastestFood.slice(0, 4).forEach(item => {
            a++;
            if (a === 5) return;
            html += `<food-preview food_id="${item.food_id}"></food-preview>`;
        });

        fastestFoodContainer.innerHTML = html;

        const firstFoodContainer = document.getElementById("first-food-container");
        html = ``;

        const firstFoods = receivedData.foods.filter(item => item.food_type == 1);
        firstFoods.map(item => {
            html += `<food-preview food_id="${item.food_id}"></food-preview>`;
           

        });
        firstFoodContainer.innerHTML = html;

        const secondFoodContainer = document.getElementById("second-food-container");
        html = ``;

        const secondFoods = receivedData.foods.filter(item => item.food_type == 2);
        secondFoods.map(item => {
            html += `<food-preview food_id="${item.food_id}"></food-preview>`;
            // console.log(item);
        });
        secondFoodContainer.innerHTML = html;
    }
}

var choosenfoods = new Choosenfoods();
choosenfoods.Init();
