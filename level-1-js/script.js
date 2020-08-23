//  question 1
var season = "summer";

// question 2
var person = {
    name: "Julie", 
    age: 24
};

// question 3
var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// question 4
var numbers = [1, 10, 15, 36, 52];

for(var i =0; i <= numbers.length; i++){
    console.log(numbers[i]);
}

// question 5 and 6
for(var count=15; count <= 25; count++){
    console.log(count);
}

// question 6
for(var count=15; count <= 25; count++) {
    console.log(count === 20);
}

// question 7
var boatPurchase = [
    {
        type: "atlantis",
        year: 14, 
        goodQuality: true
    },

    {
        type: "bavaria", 
        year: 19, 
        goodQuality: false
    }

];

for(var i = 0; i < boatPurchase.length; i++) {
    console.log(boatPurchase[i].year + " is the number value");
    console.log(boatPurchase[i].goodQuality + " is the boolean value");
}

// question 8
function whatIDontLike(bugs) {
    console.log("I don't like " + bugs);

}
whatIDontLike("spiders")

// question 9
function twoNumbers(firstNumber, secondNumber) {
    var subtractNumbers = firstNumber - secondNumber;
console.log(subtractNumbers);

}

twoNumbers(16, 4)

// question 10 
var countries = [];

function whatCountryIWantToVisit(countries) {
    var countries = ["indonesia"]
    console.log("i want to visit " + countries);

}
whatCountryIWantToVisit("indonesia")