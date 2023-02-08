'use strict';
async function searchForBook(title, author) {
  title = title.split(' ').join('+');
  author = author.split(' ').join('+');
  var url = 'https://www.googleapis.com/books/v1/volumes?q=' + title + '+inauthor:' + author + '&langRestrict=de&orderBy=relevance';
  var booktitle = '';
  return await fetch(url)
    .then((response) => response.text())
    .then((response) => {
      var oData = JSON.parse(response);
      return oData.items[0].volumeInfo.title;
      //findGerman(oData);
}).catch(console.log('No german version found.'));
}


function findGerman(data) {
  var gerArr = data.items.filter((item) => item.volumeInfo.language === 'de');
  console.log('Deutscher Titel: ' + gerArr[0].volumeInfo.title);
  return gerArr[0].volumeInfo.title;
}


//Sucht die Seite nach Tags der diese Attribute und Attributswerte hat
var title = document.querySelectorAll('[data-testid="bookTitle"]');
var author = document.querySelectorAll('[data-testid="name"]');
var ele, node, germanTitle;
searchForBook(title[0].innerHTML, author[0].innerHTML).then(
value => {
germanTitle = value; 
ele = document.createElement('p');
ele.textContent ='🇩🇪 ' + germanTitle;
//fügt diesem Tag einen Text an
title[0].parentNode.appendChild(ele);
}).catch(console.log('Couldn\'t attach element'));

