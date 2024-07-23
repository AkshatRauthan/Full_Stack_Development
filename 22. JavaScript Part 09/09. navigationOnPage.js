const list = document.querySelector("ul");

// parentElement : Returns An Object Pointing To The Parent Of The Element
console.log(`\nParent Element Of List Is : \n`);
console.dir(list.parentElement);

// children : Returns An HTML Collection Containing Objects Pointing To All The Children Of The Element.
console.log(`\nChildren Element Of Box Div Are : \n`);
console.dir(document.querySelector(".box").children);

// previousElementSibling / nextElementSibling : Returns The Object Of The Previous / Next Sibling Of The Element
console.log(`\nNext Sibling Of Unordered List : \n`);
console.dir(list.nextElementSibling);
console.log(`\nPrevious Sibling Of Unordered List : \n`);
console.dir(list.previousElementSibling);

// In This Way We Can Even Change Their Styling.