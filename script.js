name = 'Marco';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Marco';
    console.log(name);

}

    console.log('what is my average?');
    let avg = findAvg(2,2);
    console.log('what is my average?', avg);
    function findAvg(a, b) {
        console.log('This is my result');

        var answer = (a + b) / 2;
        return answer;
}



let fruits = ['apple', 'orange', 'banana'];
let favFruit;

function printFruits() {
    favFruit = fruits[1];
    console.log(fruits[0]);


}

function printFavFruit() {
console.log(favFruit);

}

printFruits();
printFavFruit();

let favFruit = fruits[2];

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }

}

printFruits();
printFavFruit();

let leastFav;
leastFav = peach;
console.log(leastFav);


//create a new function and name the function whatever you would like
//Have this function console.log "Hello, " and then your name.  Call this function before the function body.
yoJess();
function yoJess {
    console.log("Hello"  + " Marco" );
}

/*Create a new function and name the function using a function expression  (create it using let, not ver) Have
this function have an alert appear with some text of your choosing.  Call the function before it is declared.
*/

let i = function alertFunction() {

    alert("It's time to get up!");


}