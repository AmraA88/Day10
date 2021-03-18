var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
}
function myFunction(myObj) {
    var vegetablevalue = myFood["vegetable"];
    var fruitvalue = myFood["fruit"];
    var drinkvalue = myFood["drink"];
    return { vegetablevalue, fruitvalue, drinkvalue };
}
myFunction(myFood);
console.log(myFunction(myFood));
module.exports = myFunction(myFood);