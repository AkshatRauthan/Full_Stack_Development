// Await Keyword Is Used To Stop The Flow Of The Program Untill The Current Promise Is
// Completed And Returned Its Value.

const h1 = document.querySelector(`h1`);
async function SetColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let variable = Math.random();
            if (variable > 0.3){
                h1.style.color = color;
                let statement = `Success : Color Changed To ${color}`;
                console.log(statement);
                resolve(statement);
            }
            else {
                reject(`Failure : Can't Change Color To ${color}`);
            }
        }, delay);
    })
}
async function ChangeColours(delay){
    try {
        await SetColor(`green`, delay);
        await SetColor(`olivedrab`, delay);
        await SetColor(`yellowgreen`, delay);
        await SetColor(`greenyellow`, delay);
        await SetColor(`lightgreen`, delay);
    }
    catch(error){
        console.log(error);
    }
    ChangeColours(delay);
}
ChangeColours(1500);