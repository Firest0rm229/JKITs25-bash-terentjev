const number = 5;
const result1 = number.toString(2); // Konverteerime arvu 5 binaarsüsteemi
console.log("Arv 5 binaarsüsteemis: " + result1); // Väljasta tulemus

// näinteks meil on 6
/*
6/2 = 3 jääk 0
3/2 = 1 jääk 1
1/2 = 0 jääk 1
110
*/
const number2 = 6;
const result2 = number2.toString(2); // Konverteerime arvu 6 binaarsüsteemi
console.log("Arv 6 binaarsüsteemis: " + result2); // Väljasta tulemus


const a = 110;
const result3 = parseInt(a, 2); // Konverteerime binaararvu 110 kümnendsüsteemi
console.log("Binaararv 110 kümnendsüsteemis: " + result3); // Väljasta tulemus

const binary = "1010";
const result4 = parseInt(binary, 2); // Konverteerime binaararvu 1010 kümnendsüsteemi
console.log("Binaararv 1010 kümnendsüsteemis: " + result4); // Väljasta tulemus

const number3 = 0;
const result5 = number3.toString(2); // Konverteerime arvu 0 binaarsüsteemi
console.log("Arv 0 binaarsüsteemis: " + result5); // Väljasta tulemus

//Teisendage kümnendsüsteemist binaarsüsteemi
/*
110 
6871 
58 
188714

vastupidi teisendamine binaarsüsteemist kümnendsüsteemi
1001 
01100101 
10100111 
101110111101
*/
