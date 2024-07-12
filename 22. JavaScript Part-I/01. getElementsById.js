let spiderMan = document.getElementById("mainImg");
// Returns An Object Of The Element With The Passed Id.

console.dir(spiderMan);
console.log(`\nThe Source Of The Image is : ${spiderMan.src}`)

// Along With This We Can Even Change The Values That Are Present In The Object.
// This Will Directly Alter The Element That Is Present On The Main HTML Document.

let flag = true;

let changeMainImage = setInterval(() => {
    if (flag){
        spiderMan.src = "assets/creation1.jpg";
        flag = false;
    }
    else {
        spiderMan.src = "assets/spiderman_img.jpg";
        flag = true;
    }
}, 1000);

changeMainImage();