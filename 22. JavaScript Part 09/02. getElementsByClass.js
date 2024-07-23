// This Method Will Return An "HTMLCollection" Of All The Elements Of The HTML Document Having The Passed Class Name.

let oldImgObj = document.getElementsByClassName("oldImg");
console.dir(oldImgObj);

let i = 0;

let changeImages = setInterval(() => {
    oldImgObj[i].src = "assets/spiderman_img.jpg";

    if (i == 0) oldImgObj[2].src = "assets/creation3.jpg";
    else if (i == 1) oldImgObj[0].src = "assets/creation1.jpg";
    else oldImgObj[1].src = "assets/creation2.jpg";
    i++;
    if (i == 3) i=0;
}, 1500);