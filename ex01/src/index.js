var myPet = {
    species: "Labrador",
    name: "Rexi",
    legs: 4,
    friends: ["Roni", "Jaksi"]
};
function myFunction(myObj) {
    return myObj;
}
myFunction(myPet);

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };
