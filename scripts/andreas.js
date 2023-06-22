var prices = [1299, 809.40]; // Array med individuelle priser for hver taske
var quantities = [1, 1]; // Array med individuelle mængder for hver taske

function incrementPrice(index) {
   quantities[index - 1]++;
   updatePrice();
   document.getElementById("case-number-" + index).value = quantities[index - 1]; // Opdater værdien af input-elementet
}

function decrementPrice(index) {
   if (quantities[index - 1] > 1) {
      quantities[index - 1]--;
      updatePrice();
      document.getElementById("case-number-" + index).value = quantities[index - 1]; // Opdater værdien af input-elementet
   }
}

function updatePrice() {
   var totalPrice = 0;
   for (var i = 0; i < prices.length; i++) {
      var bagTotal = prices[i] * quantities[i];
      totalPrice += bagTotal;
      document.getElementById("bag-total-" + (i + 1)).innerHTML = bagTotal.toFixed(2) + " kr<span class='normal-text-'>  inkl. moms</span>";
   }
   document.getElementById("total-price").innerHTML = "Samlet beløb: " + totalPrice.toFixed(2) + " kr";
}

function updatePrice() {
    var totalPrice = 0;
    for (var i = 0; i < prices.length; i++) {
       var bagTotal = prices[i] * quantities[i];
       totalPrice += bagTotal;
       var formattedTotal = bagTotal.toLocaleString('da-DK', { minimumFractionDigits: 2 });
       document.getElementById("bag-total-" + (i + 1)).innerHTML = formattedTotal + " kr<span class='normal-text-'>  inkl. moms</span>";
    }
    var formattedPrice = totalPrice.toLocaleString('da-DK', { minimumFractionDigits: 2 });
    document.getElementById("total-price").innerHTML = "Samlet beløb: " + formattedPrice + " kr";
 }
 

 variabler er en boks med hukommelse, en kasse man kan putte værdier i. så variabler gemmer navn og alder 

 operater er værdiger på vairabler altså addition og subtraktion 

 array er en datastruktur der kan opbevare elementer af samme type under et navn 

 if-else er en kontrolstruktur. det giver mulighed for at styre programflowet 

 Funktion udfører en bestemt beregning
