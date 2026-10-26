// Andmetüüp ja andmestruktuur

let age = 25; // Number
console.log("Type of age: " + typeof age); // Väljasta andmetüüp

const Myname = "Anna"; 
console.log("Type of name: " + typeof Myname); // Väljasta andmetüüp

const isGreater = 10 > 5;
console.log("Type of isGreater: " + typeof isGreater); // Väljasta andmetüüp

//Muutuja ilma väärtuseta
let answer; 
console.log("Type of answer: " + typeof answer); // Väljasta andmetüüp

//null väärtus
const emptyValue = null;
console.log("Type of emptyValue: " + typeof emptyValue); // Väljasta andmetüüp
console.log(emptyValue == null); // Väljasta väärtus

//tüübi teisendamine/võrdlemine
const bb = 5;
const cc = "5";
console.log(bb = cc);

//Võrdleme arvude ja stringide liitmist
console.log(5 + 5); // Arvude liitmine
console.log("5" + "775"); // Stringide liitmine

//Teisendame
const text = String(25); // Teisendame arvu stringiks
console.log("Type of text: " + typeof text); // Väljasta andmetüüp

//Objektid ja massiivid
const student = {
    name: "John",
    age: 20
};
console.log(student.name, student.age); // Väljasta objekti omadus

const student2 = {
    name: "Jane",
    age: 22
};
student2.age = 23; // Muudame objekti omadust
student2.school = "High School"; // Lisame uue omaduse
console.log(student2.name, student2.age, student2.school); // Väljasta objekti omadused

//Massiiv
const grades = [90, 85, 78, 92];
console.log("Grades: " + grades[2]); // Väljasta massiiv
console.log(Array.isArray(grades)); // Kontrollime, kas grades on massiiv

//pesastatud objekt
const student3 = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(student3.name, student3.address.city, student3.address.zip); // Väljasta pesastatud objekti omadused

//Set 
const colors = ["red", "green", "blue", "red", "green"];
const uniqueColors = new Set(colors); // Loome unikaalsete värvide komplekti
console.log("Unique colors: " + Array.from(uniqueColors)); // Väljasta unikaalsed värvid massiivina
console.log(uniqueColors.has("blue")); // Kontrollime, kas komplektis on "blue"
console.log(uniqueColors.size); // Väljasta komplekti suurus

/*Ülesanne
Looge autode markide massiiv, milles on korduvaid elemente.
Leidke Set abil unikaalsed elemendid ja väljastage need konsooli.
Leidke massivi suurus enne ja pärast Set-i loomist.
*/
const carBrands = ["Toyota", "Honda", "Ford", "Toyota", "BMW", "Honda"];
console.log("Car brands before Set: " + carBrands.length); // Väljasta massiivi suurus enne Set-i loomist       
const uniqueCarBrands = new Set(carBrands);
console.log("Unique car brands: " + Array.from(uniqueCarBrands)); // Väljasta unikaalsed autode margid massiivina
console.log("Car brands after Set: " + uniqueCarBrands.size); // Väljasta massiivi suurus pärast Set-i loomist
