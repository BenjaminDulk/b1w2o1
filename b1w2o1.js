// Benjamin den Dulk
// Front-End Development opleiding

var morepiz = 0; //zet variabel voor de vraag of de gebruiker meer wil bestellen
var spizamount = 0; 
var mpizamount = 0;
var lpizamount = 0; // zet variabels voor gevraagde hoeveelheid van elke afmeting
const spizprice = 6.99; //kleine pizza kost 6,99
const mpizprice = 9.99; //medium pizza kost 9,99
const lpizprice = 12.99; //grote pizza kost 12,99


while (morepiz == 0) { //terwijl de gebruiker niet wenst om de loop stop te zetten...
	let pizchoice = prompt("What size would you like? Type in s for small, m for medium or l for large."); //vraag om gewenste afmeting, wat dan een bepaalde branch activeert dat afhangt van de antwoord
	if (pizchoice == "s") { //"gebruiker vraagt om kleine pizzas" branch
		if (spizamount == 0) { //als de gebruiker (nog) niet voor kleine pizzas heeft gevraagd...
			spizamount = prompt("How many small pizzas would you like to order?"); //vraag om gewenste hoeveelheid kleine pizzas
			lastsize = "small" //zet de "lastsize" variabel op welke afmeting de gebruiker als laatst heeft gevraagd, in dit geval klein
			} else { //als de gebruiker in een eerdere loop al om kleine pizzas had gevraagd...
				rewritesamount = prompt("You already have ordered "+ spizamount +" small pizzas. Would you like to change this number? (Y/N)"); //notificeer gebruiker over al gevraagde afmeting, vraag om confirmatie
				if (rewritesamount == "Y") { //als de gebruiker confirmeert... (in geval van een andere antwoord zal de loop resetten)
					spizamount = prompt("How many small pizzas would you like to order?"); //vraag weer over gewenste hoeveelheid kleine pizzas
					lastsize = "small" //zet de "lastsize" variabel op klein
					}
		} 
	} else if (pizchoice == "m") { //"gebruiker vraagt om medium pizzas" branch
		if (mpizamount == "0") { //als de gebruiker (nog) niet voor medium pizzas heeft gevraagd...
			mpizamount = prompt("How many medium pizzas would you like to order?"); //vraag om gewenste hoeveelheid kleine pizzas
			lastsize = "medium" //zet de "lastsize" variabel op medium
			} else { //als de gebruiker in een eerdere loop al om medium pizzas had gevraagd...
				rewritemamount = prompt("You already have ordered "+ mpizamount +" medium pizzas. Would you like to change this number? (Y/N)"); //notificeer gebruiker over al gevraagde afmeting, vraag om confirmatie
				if (rewritemamount == "Y") {//als de gebruiker confirmeert... (in geval van een andere antwoord zal de loop resetten)
					mpizamount = prompt("How many medium pizzas would you like to order?"); //vraag weer over gewenste hoeveelheid medium pizzas
					lastsize = "medium" //zet de "lastsize" variabel op medium
					}
		}
	} else if (pizchoice == "l") { //"gebruiker vraagt om grote pizzas" branch
		if (lpizamount == "0") { //als de gebruiker (nog) niet voor kleine pizzas heeft gevraagd...
			lpizamount = prompt("How many large pizzas would you like to order?"); //vraag om gewenste hoeveelheid kleine pizzas
			lastsize = "large" //zet de "lastsize" variabel op groot
			} else { //als de gebruiker in een eerdere loop al om grote pizzas had gevraagd...
				rewritelamount = prompt("You already have ordered "+ lpizamount +" large pizzas. Would you like to change this number? (Y/N)"); //notificeer gebruiker over al gevraagde afmeting, vraag om confirmatie
				if (rewritelamount == "Y") {//als de gebruiker confirmeert... (in geval van een andere antwoord zal de loop resetten)
					lpizamount = prompt("How many large pizzas would you like to order?"); //vraag weer over gewenste hoeveelheid grote pizzas
					lastsize = "large"//zet de "lastsize" variabel op groot
					}
		}
	} else break; //als de gebruiker een andere antwoord geeft dan s, m of l, reset de loop
	let morepizchoice = prompt("Do you want to order different sizes other than "+ lastsize +"? (Y/N)"); //als de gebruiker een afmeting heeft gekozen, vraag of ze een andere afmeting willen
	if (morepizchoice == "N"){ //als de gebruiker niet meer wil bestellen...
		morepiz = 1 //verander de variabel dat de loop gebruikt om te herhalen
	} 
}

if (spizamount > 0) { //als de gebruiker voor kleine pizzas had gevraagd tijdens de loop...
	document.write("Small Pizza "+ spizprice +" x "+ spizamount +" = "+ (spizamount * spizprice) +"<br>") //bereken en print de prijs van alle kleine pizzas dat werd gevraagd
}
if (mpizamount > 0) { //als de gebruiker voor medium pizzas had gevraagd tijdens de loop...
	document.write("Medium Pizza "+ mpizprice +" x "+ mpizamount +" = "+ (mpizamount * mpizprice) +"<br>") //bereken en print de prijs van alle medium pizzas dat werd gevraagd
}
if (lpizamount > 0) { //als de gebruiker voor grote pizzas had gevraagd tijdens de loop...
	document.write("Large Pizza "+ lpizprice +" x "+ lpizamount +" = "+ (lpizamount * lpizprice) +"<br>") //bereken en print de prijs van alle grote pizzas dat werd gevraagd
}
document.write("<br>Total = "+ Number((spizamount * spizprice) + (mpizamount * mpizprice) + (lpizamount * lpizprice))) //bereken en print de prijs van alle gevraagde pizzas