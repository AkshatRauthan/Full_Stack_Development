const h1 = document.querySelector("h1"), delay = 1500;

function ChangeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(`Success : Changed Color To ${color}`);
        }, delay);
    });
}
function ChangeColorInLoop(){
    ChangeColor(`red`, delay)
    .then((result) => {
        console.log(result);
        return ChangeColor(`yellow`, delay);
    })
    .then((result) => {
        console.log(result);
        return ChangeColor(`orange`, delay);
    })
    .then((result) => {
        console.log(result);
        return ChangeColor(`green`, delay);
    })
    .then((result) => {
        console.log(result);
    })
}
ChangeColorInLoop();
setInterval(ChangeColorInLoop, 6000);