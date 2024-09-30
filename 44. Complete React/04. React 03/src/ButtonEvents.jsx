// event => Default Event Object

function handleClick01(event){
    console.log("I Need Help");
    console.log("The Target Of Event Is : ",event.target, "\n\n");
}

function handleClick02(event){
    console.log("I'm Never Going To See You Again");
    console.log("The Target Of Event Is : ",event.target, "\n\n");
    setTimeout(() => {
        console.log("Nah, I'm Just Joking")
    }, 1000);
}

function handleMouseOver(event){
    console.log("I Already Know That! Hahahaha.......");
    console.log("The Target Of Event Is : ",event.target, "\n\n");
}

function handleDoubleClick(event){
    console.log("I just don't care about it.\nCause I Don't Need Anyone's Help");
    console.log("The Target Of Event Is : ",event.target, "\n\n");
}

export function Button(){
    return (
        <div>
            <button onClick={handleClick01}>Click Me!</button>
            <p onClick={handleClick02} onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} >
                 So even you aren't going to help?
            </p>
        </div>
    );
}