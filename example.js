//data avah
fetch("")
.then(result=>result.json())
.then(resultObject=>{

})










//arraytia ajillah
const rawFoods = [
    {
        name: "Drink1",
        price: 6000,
        type: "drink"
    },
    {
        name: "food name",
        price: 6000,
        type: "dessert"
    },
    {
        name: "food name",
        price: 6000,
        type: "other"
    },
    {
        name: "Drink4",
        price: 7000,
        type: "dessert"
    }
];
const foodsHTML=foods.map(foodObject=>`<article><h3>${foodObject.name}</h3><img src="" alt=""><p>${foodObject.price}</p></article>`
);
//bugdiin join higed negtgeh uguig shiidej cddg songon huvirgalt hij bldg
foodsHTML.join
const foodsHTMLArray= foodsHtMLArray.reduce((prev,current)=>prev+current)


const filteredFoods = rawFoods.filter(food => food.type === "dessert"); 

console.log(document.getElementById("foods").innerHTML);

let foodsHTML = "";
for (const food of filteredFoods) { // Changed 'foods[0].items' to 'filteredFoods'
    foodsHTML += `<article><h3>${food.name}</h3><img src="" alt=""><p>${food.price}</p></article>`;
}
document.getElementById("foods").innerHTML = foodsHTML;
