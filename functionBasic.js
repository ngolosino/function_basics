function favoriteAnimal(animal){
    return animal + " is my favorite animal";
}

console.log(favoriteAnimal("Cats"));

function addNumbers(a, b){
    return a + b;
}

console.log(addNumbers(3,4));

function add7(a){
    return a + 7;
}

console.log(add7(1));

function multiplyNumbers(a,b){
    return a * b;
}

console.log(multiplyNumbers(4, 5));

function capitalize(val){
    return String(val[0]).toUpperCase() + String(val).slice(1);
}

console.log(capitalize("hello world"));

function lastLetter(val){
    return String(val.slice(0,-1) + "d");
}


console.log(lastLetter("hello yawars"))