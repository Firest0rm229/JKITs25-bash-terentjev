// funktsion on nimega käskude kogum, mis täidab kindlat ülesannet.
// Funktsioonid aitavad meil koodi korrastada ja korduvkasutada. 

//1.
function sayHello() {
    console.log("Tere!");
}
sayHello(); // kutsume funktsiooni välja 
sayHello(); // kutsume funktsiooni välja

//2. parameetrid ja argumendid
function greet(name) {
    console.log("Tere, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");

//3. tagastamine / return
//return tagastab tulemuse ja lõpetab fuktsiooni täitmise
function add(a, b) {
    return a + b 
}
const result = add(5, 10);
console.log("Summa on: " + result);

//4. funktsionaalne avaldis (function expression)
const multiply = (a, b) => {
    return a * b;
};
const product = multiply(5, 10);
console.log("Toode on: " + product);

//5. arrow function 
const divide = (a, b) => {
    return a / b;
}
const quotient = divide(10, 2);
console.log("Jagatis on:" + quotient);

//ülesanne 
//kirjutage funksioon, mis võtab argumendiks numbri ja tagastab selle numbri ruudu
function square(number) {
    return number * number;
}

const squaredNumber = square(5);
console.log("Arvu ruut on: " + squaredNumber);
