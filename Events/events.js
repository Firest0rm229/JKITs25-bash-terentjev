//sündmus on brauseri teade tegevuse kohta, mis toimub veebilehel.
// Sündmused võivad olla näiteks hiireklõpsud, klaviatuuri vajutused, lehe laadimine jne.
// lehe laadimine või vormi esitamine.

const clickButton = document.getElementById("click-button");
const clickResult = document.getElementById("click-result");
const targetResult = document.getElementById("target-result");

let click = 0;
function countClicks(event) {
    click++;
    clickResult.textContent = "Klõpsus: " + click;
    targetResult.textContent = "type: " + event.type + 
    ", target: " + event.target.name +
    ", currentTarget: " + event.currentTarget.tagName;
    
}
clickButton.addEventListener("click", countClicks);
