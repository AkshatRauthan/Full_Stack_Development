// Await Keyword Is Used To Stop The Flow Of The Program Untill The Current Promise Is
// Completed And Returned Its Value.

const h1 = document.querySelector(`h1`);

async function SetColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    })
}

async function ChangeColours(delay){
    await SetColor(`green`, delay);
    await SetColor(`olivedrab`, delay);
    await SetColor(`yellowgreen`, delay);
    await SetColor(`greenyellow`, delay);
    await SetColor(`lightgreen`, delay);
    ChangeColours(delay);
}

ChangeColours(1500);