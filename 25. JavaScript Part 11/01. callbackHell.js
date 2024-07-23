h1 = document.querySelector("h1");

function ChangeColor(color, delay, NextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if (NextColorChange) NextColorChange();
    }, delay);
}

// The Below Condition Where We Pass Multiple Multiple Callbacks is Called Callback Hell.
// It Is Generally Used To Handle The Flow Of Program Created Due To Async. Nature Of JS.
// It Is Solved Using Promises In JS.

function ChangeColorsInLoop(delay = 1000){
    ChangeColor("red", delay,() => {
        ChangeColor("orange", delay, () => {
            ChangeColor("yellow", delay, () => {
                ChangeColor("green", delay, () => {
                    ChangeColorsInLoop(delay);
                })
            });
        });
    });
}

ChangeColorsInLoop(1500);