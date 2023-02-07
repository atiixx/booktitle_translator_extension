'use strict';


//Sucht die Seite nach Tags der diese Attribute und Attributswerte hat
var test = document.querySelectorAll('[data-testid="bookTitle"]');
//fügt diesem Tag einen Text an
test[0].innerHTML = test[0].innerHTML + ' ein testitest';