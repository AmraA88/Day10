var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
}
function myFunction(myObj) {
    var hatvalue = myObj.hat;
    var shirtvalue = myObj.shirt;
    var shoesvalue = myObj.shoes;
    return { hatvalue, shirtvalue, shoesvalue };
}
myFunction(myClothes);
console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);