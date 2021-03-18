var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
}
function myFunction(myObj) {
    var playerNumber = "10"
    var players = myObj[playerNumber]
    return players;
}
console.log (myFunction(players));
myFunction(players);
module.exports = { players, myFunction }