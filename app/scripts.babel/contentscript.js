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
      console.log(oData);
      return oData.items;
      //findGerman(oData);
}).catch(error => console.error(error));
}


function findGerman(data) {
  var gerArr = data.items.filter((item) => item.volumeInfo.language === 'de');
  console.log('Deutscher Titel: ' + gerArr[0].volumeInfo.title);
  return gerArr[0].volumeInfo.title;
}


//Sucht die Seite nach Tags der diese Attribute und Attributswerte hat
var title = document.querySelectorAll('[data-testid="bookTitle"]');
var author = document.querySelectorAll('[data-testid="name"]');
var ele, node, germanTitles;
searchForBook(title[0].innerHTML, author[0].innerHTML).then(
value => {
germanTitles = value; 
var length = germanTitles.length;
console.log(germanTitles);
ele = document.createElement('p');
ele.textContent = '🇩🇪 ';
for(var i = 0; i < length; i++){
  ele.textContent = ele.textContent + germanTitles[i].volumeInfo.title;
  if(i == 5) {break};
  if(i != length-1) {ele.textContent = ele.textContent + ' || '};
}

//fügt diesem Tag einen Text an
title[0].parentNode.appendChild(ele);
}).catch(console.log('Couldn\'t attach element'));

