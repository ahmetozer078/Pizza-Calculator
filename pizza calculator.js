//ahmet ozer Pizza Calculator.


var amountSmall = prompt("hoeveel kleine pizza's wilt u? [20cm]");
var amountMedium = prompt("hoeveel medium pizza's wilt u? [30cm]");
var amountLarge = prompt("hoeveel grote pizza's wilt u? [40cm]");

var priceSmall = 3.50
var priceMedium = 5.50
var priceLarge = 7.50


var totalS = 3.50*amountSmall
var totalM = 5.50*amountMedium
var totalL = 7.50*amountLarge



alert("de aantal pizza's die je heb besteld zijn ");
alert(+amountSmall+ " kleine pizza's");
alert(+amountMedium+ " medium pizza's");
alert(+amountLarge+ " grote pizza's");

alert("uw totale prijs voor de kleine pizza's is €"  +priceSmall*amountSmall)
alert("uw totale prijs voor de medium pizza's is €"  +priceMedium*amountMedium)
alert("uw totale prijs voor de grote pizza's  is €"  +priceLarge*amountLarge)

var totalep = totalS + totalM + totalL;

alert("uw totale kosten voor alle pizza's zijn €" +totalep);



document.write("de prijzenlijst voor de pizza's zijn : 3,50 voor kleine pizza's,<br> 5,50 voor medium pizza's <br> en 7,50 voor grote pizza's.<br>")






document.write("de kosten voor uw kleine pizza's zijn: €" +totalS+ "<br> De kosten voor uw medium pizza's zijn:€" +totalM+ "<br> de kosten voor uw grote pizza's zijn:€" +totalL)










document.write("<br>de totale prijs is €"      +totalep+  "<br> de aantal pizza's die u heeft besteld zijn: <br>" +amountSmall+ " kleine pizza's, " +amountMedium+ " medium pizza's en " +amountLarge+ " grote pizza's ");










document.write("<br> <br> <br> bedankt voor uw bestelling :]<br> uw bestelling word verwerkt in onze systeem.")











