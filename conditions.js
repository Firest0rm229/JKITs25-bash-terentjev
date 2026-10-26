// if esle, else if

//if võimaldab meil otsuseid, kui tingimus on tõene, siis käivitub if plokk, kui tingimus on väär

//if täidab looksulgedes {} oleva plokki tingimus on tõene, kui tingimus väär, siis if plokk vahele jäetakse

const age =17;
if (age >=18) {
    console.log("Täiskasvanu.");
} else {
    console.log("Noor.");
}


//2.
const points = 75;
if (points >= 90) {
    console.log("Suurepärane!");
} else if (points >=50) {
    console.log("Arvestatud!");
} else {
    console.log("Proovi uuesti!");
}

//3.
const hasTicket = true;
const hasInvitation = false;
const isBlocked = false; 
if ((hasTicket || hasInvitation) && !isBlocked) {
    console.log("Sissepääs lubatud.");
}

//ülesanne
const number = 10;
//kontrollime, kas number on paaris või paaritu