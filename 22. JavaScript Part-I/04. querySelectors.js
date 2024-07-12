// querySelector : Selects The First Element Having The Specified Id / Class / Tag-Name :

// We Can Even Use Pseudo Selectors, Child Selectors or Descendent Selectors Here.

// Selects The First Image Tag
let imgMain = document.querySelector("IMG");
console.log(`\nThe Id Of The First Image In The Page Is : ${imgMain.id}\n`);

// Selects The First Element With Class = oldImg
let oldImg = document.querySelector(".oldImg");
console.log(`\nThe Properties Of The Image Object Corresponding To The Hidden Image Are :\n`);
console.dir(oldImg);
oldImg.hidden = true;

// Selects The First Element With id = heading
let heading = document.querySelector("#heading")
heading.align = "center";


// querySelectorAll : Selects All The Elements Having Specified Id / Class / Tag-Name :

let img = document.querySelectorAll("img");
console.log(`\n\nAll The Images Present Are : \n`);
console.dir(img);

// Same With All The Other Queries.