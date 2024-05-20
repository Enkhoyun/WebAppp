class Choosenfoods {
    async Init() {
        const data = await fetch("/food.json");
        const receivedData = await data.json();
        const search = document.getElementById("search");
        const searchBtn = document.querySelector(".fa-magnifying-glass");
        const container = document.getElementById("searched-food-article");
        let html = ``;

        searchBtn.addEventListener('click', () => {
            html = ``; 
            const searchedFoods = receivedData.foods.filter(item => item.food_name === search.value);

            searchedFoods.forEach(item => {
                html += `<food-preview food_id="${item.food_id}"></food-preview>`;
            });

            container.innerHTML = html;
        });

        this.displayFastestFoods(receivedData.foods);
        this.displayFirstFoods(receivedData.foods);
        this.displaySecondFoods(receivedData.foods);
    }

    displayFastestFoods(foods) {
        const fastestFoodContainer = document.getElementById("fastest-food-container");
        let html = ``;
        const fastestFood = foods.sort((a, b) => a.time - b.time);

        fastestFood.slice(0, 4).forEach(item => {
            html += `<food-preview food_id="${item.food_id}"></food-preview>`;
        });

        fastestFoodContainer.innerHTML = html;
    }

    displayFirstFoods(foods) {
        const firstFoodContainer = document.getElementById("first-food-container");
        let html = ``;

        const firstFoods = foods.filter(item => item.food_type === 1);
        firstFoods.forEach(item => {
            html += `<food-preview food_id="${item.food_id}"></food-preview>`;
        });

        firstFoodContainer.innerHTML = html;
    }

    displaySecondFoods(foods) {
        const secondFoodContainer = document.getElementById("second-food-container");
        let html = ``;

        const secondFoods = foods.filter(item => item.food_type === 2);
        secondFoods.forEach(item => {
            html += `<food-preview food_id="${item.food_id}"></food-preview>`;
        });

        secondFoodContainer.innerHTML = html;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const choosenfoods = new Choosenfoods();
    choosenfoods.Init();

    const bookmarkIcon = document.querySelector('.fa-bookmark');
    const saveElement = document.querySelector('save-element');

    bookmarkIcon.addEventListener('click', () => {
        if (saveElement.classList.contains('save-element-hidden')) {
            saveElement.classList.remove('save-element-hidden');
            saveElement.classList.add('save-element-visible');
        } else {
            saveElement.classList.remove('save-element-visible');
            saveElement.classList.add('save-element-hidden');
        }
    });

    saveElement.addEventListener('mouseleave', () => {
        saveElement.classList.remove('save-element-visible');
        saveElement.classList.add('save-element-hidden');
    });
});
