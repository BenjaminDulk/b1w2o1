// Benjamin den Dulk
// Front-End Development opleiding
// Adapted by Antony den Dulk

// Texts
const questionPizzaSize =
	"What size would you like?"
	+ "\nType in S for small, M for medium or L for large.";
const questionPizzaAmount =
	"How many <size> pizzas would you like to order?";
const questionChangeAmount =
	"You already have ordered <total> <size> pizzas."
	+ "\nWould you like to change this number? (Y/N)";

// Arrays with required data - small then medium then large.
const answersYesNo = ["Y", "N"];
const answersPizzaSizes = ["S", "M", "L"];
const pizzaSizes = ["small", "medium", "large"]
const pizzaPrices = [6.99, 9.99, 12.99]
var pizzaTotals = [0, 0, 0]
var totalPrice = 0;
var currentPizzaSize = -1;
var yesNo;

function questionHowManyPizzas(currentPizzaSize) {
	do {
		amount = prompt(
			questionPizzaAmount
				.replace("<size>", pizzaSizes[currentPizzaSize])
		);
	} while (amount == "" || isNaN(amount));
	return amount;
}

function questionChangePizzaTotal(currentPizzaSize) {
	// Notificeer gebruiker over al gevraagde afmeting, vraag om confirmatie
	return prompt(
		questionChangeAmount
			.replace("<size>", pizzaSizes[currentPizzaSize])
			.replace("<total>", pizzaTotals[currentPizzaSize])).toUpperCase();
}

function questionAddToOrder(currentPizzaSize) {
	//als de gebruiker een afmeting heeft gekozen, vraag of ze een andere afmeting willen
	return prompt(
		"Last size ordered - " + capitalizeFirstLetter(pizzaSizes[currentPizzaSize])
		+ "\nDo you want to add more pizzas to your order? (Y/N)"
	).toUpperCase();
}

function capitalizeFirstLetter(sString) {
	return sString.charAt(0).toUpperCase() + sString.slice(1);
}

function toNLEuro(fNumber) {
	return Number(fNumber).toLocaleString("nl-NL", { style: "currency", currency: "EUR" });
}

while (true) { //terwijl de gebruiker niet wenst om de loop stop te zetten...
	while (currentPizzaSize < 0) {
		currentPizzaSize = prompt(questionPizzaSize).toUpperCase();
		currentPizzaSize = answersPizzaSizes.indexOf(currentPizzaSize); // Convert string to number.
	}

	if (pizzaTotals[currentPizzaSize] == 0) { // Eerste keer pizza groote gekozen...
		yesNo = "Y";
	} else { // pizza is al een keer gekozen
		yesNo = questionChangePizzaTotal(currentPizzaSize);
	}
	if (yesNo == "Y") { //als de gebruiker confirmeert... (in geval van een andere antwoord zal de loop resetten)
		pizzaTotals[currentPizzaSize] = questionHowManyPizzas(currentPizzaSize);
	}

	do {
		yesNo = questionAddToOrder(currentPizzaSize);
	} while (!answersYesNo.includes(yesNo));
	if (yesNo == "N") { //als de gebruiker niet meer wil bestellen...
		break;
	}

	currentPizzaSize = -1;
}

// Bereken en print de prijs van alle pizzas dat werd gevraagd
for (i = 0; i < pizzaSizes.length; i++) {
	if (pizzaTotals[i] > 0) {
		document.write(
			capitalizeFirstLetter(pizzaSizes[i]) + " Pizza "
			+ toNLEuro(pizzaPrices[i]) + " x " + pizzaTotals[i]
			+ " = " + toNLEuro(pizzaTotals[i] * pizzaPrices[i])
			+ "<br>"
		)
		totalPrice += pizzaTotals[i] * pizzaPrices[i] // Bereken de prijs van alle gevraagde pizzas
	}
}
document.write("<br>Total = " + toNLEuro(totalPrice)) // Print de prijs van alle gevraagde pizzas