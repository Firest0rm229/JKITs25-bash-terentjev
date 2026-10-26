//1. Laualambi sisselülitamine 

//Reegel: lamp põleb, kui elektrivool on olemas ja lüliti on sisse lülitatud.

const PowerOn = true; // Elektrivool on olemas
const SwitchOn = true; // Lüliti on sisse lülitatud

const result1 = PowerOn && SwitchOn; // Kontrollime, kas lamp põleb
console.log("Kas lamp põleb? " + result1); // Väljasta tulemus

//2. Veebitunni avamine
//reegel: Tunni avamiseks on vaja internetiühendust ja linki

//internetiünhendus olemas
const InternetOn = true; 
//link olemas
const HasLink = false; 
const result2 = InternetOn && HasLink; // Kontrollime, kas tunni saab avada
console.log("Kas veebitundi saab avada? " + result2); // Väljasta tulemus

//&& - loogiline JA (AND) operaator //konjunktsioon
//|| - loogiline VÕI (OR) operaator //disjunktsioon

//3. Ostu eest tasumine
//Reegel: sularahas või pangakaardiga 

const CashAvailable = false; // Sularaha on olemas
const HasCard = true; // Pangakaart on olemas

const result3 = CashAvailable || HasCard; // Kontrollime, kas saab tasuda
console.log("Kas saab tasuda? " + result3); // Väljasta tulemus

//4. Teate saamine
//Reegel: Teate on saadud, kui saabus e-kiri või SMS
const EmailReceived = false; // E-kiri on saabunud
const SMSReceived = true; // SMS on saabunud
const result4 = EmailReceived || SMSReceived; // Kontrollime, kas teade on saadud
console.log("Kas teade on saadud? " + result4); // Väljasta tulemus

//5. Akna avamine
//Reegel: Võib avada, kui vihma ei saja 
const IsRaining = false; // Vihma ei saja
const result5 = !IsRaining; // Kontrollime, kas akent võib avada
console.log("Kas võib avada? " + result5); // Väljasta tulemus

//6. Serveri käivitamine
//Reegel: Vaja on sisselülitatud arvutit, paigaldatud operatsioonisüsteemi 
// ja kävitamisõigust
const ComputerOn = true; // Arvuti on sisse lülitatud
const OSInstalled = true; // Operatsioonisüsteem on paigaldatud
const HasPermission = false; // Käivitamisõigus on olemas

const result6 = ComputerOn && OSInstalled && HasPermission; // Kontrollime
console.log("Kas serveri saab käivitada? " + result6); // Väljasta tulemus

//7. Kooli jõudmine
//Reegel: Kooli saab minna bussi, jalgratta või (||) vanemate autoga
const BusAvailable = false; // Buss on saadaval
const BikeAvailable = true; // Jalgratas on saadaval
const ParentsCarAvailable = false; // Vanemate auto on saadaval
const result7 = BusAvailable || BikeAvailable || ParentsCarAvailable; // Kontrollime, kas saab kooli jõuda
console.log("Kas saab kooli jõuda? " + result7); // Väljasta tulemus

//8. Filmi vaatamine
//Reegel: Vaja on internetiühendust ning tellimust või ostetud veebiseansi piletit
const InternetHomeOn = true; // Internetiühendus on olemas
const HasSubscription = true; // Tellimus on olemas
const HasTicket = false; // Veebiseansi pilet on ostetud

const result8 = InternetHomeOn && (HasSubscription || HasTicket); // Kontrollime, kas filmi saab vaadata
console.log("Kas filmi saab vaadata? " + result8); // Väljasta tulemus

//9. piknik
//Reegel: Vaja on toitu ning kuiva ilma või katusega lehtlat
const FoodAvailable = true; // Toit on olemas
const Rainy = false; // On vihma
const HasShelter = true; // Katusega lehtla on olemas
const result9 = FoodAvailable && (!Rainy || HasShelter); // Kontrollime, kas piknikku saab pidada
console.log("Kas piknikku saab pidada? " + result9); // Väljasta tulemus

//10. Uuenduse allalaadimine
//Reegel: Vaja on internetiühendust ning ja kettaruumi.
//Madal akutase koos ühendamata laadijaga keelab allalaadimise

const InternetConnection = true; // Internetiühendus on olemas
const DiskSpace = true; // Kettaruum on olemas
const LowBattery = true; // Madal aku tase
const ChargerConnected = false; // Laadija on ühendatud
const result10 = InternetConnection && DiskSpace && (!LowBattery || ChargerConnected); // Kontrollime, kas uuendust saab alla laadida
console.log("Kas uuendust saab alla laadida? " + result10); // Väljasta tulemus

//11. Valmis tellimuse kättesaamine
//Reegel: Tellimus peab olema valmis, kuller või väljastuspunkt saadaval ning väljastamine blokeerimata
const OrderReady = true; // Tellimus on valmis
const CourierAvailable = false; // Kuller on saadaval
const PickupAvailable = true; // Väljastuspunkt on saadaval
const Blocked = false; // Väljastamine pole blokeeritud
const result11 = OrderReady && (CourierAvailable || PickupAvailable) && !Blocked; // Kontrollime, kas tellimust saab kätte
console.log("Kas tellimust saab kätte? " + result11); // Väljasta tulemus