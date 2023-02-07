'use strict';


const key = 'AIzaSyATKSUfldEqdknIrfiPOwFCx4NoEVL3zTI';

console.log(searchForBook('The way of kings'));
//Sucht die Seite nach Tags der diese Attribute und Attributswerte hat
var test = document.querySelectorAll('[data-testid="bookTitle"]');
//fügt diesem Tag einen Text an
test[0].innerHTML = test[0].innerHTML + '🇩🇪 ein testitest';


function searchForBook(title){
  title = title.split(' ').join('+');
  var url = 'https://www.googleapis.com/books/v1/volumes?q=' + title + '&key='+ key;
  chrome.runtime.sendMessage( //goes to bg_page.js
      url,
      data => parseResponse(data) //your callback
); 
  }

function parseResponse(data){
  console.log(data);
}