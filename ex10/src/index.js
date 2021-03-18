function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            format: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Michael Jackson",
            title: "Billie Jean",
            release_year: 1982,
            format: {
                1: "CD",
                2: "6T",
                3: "LB"
            },
            gold: false
        }
    }
    return myMusic;
}
console.log(myFunction()[2]);
myFunction()[2];

module.exports = myFunction;