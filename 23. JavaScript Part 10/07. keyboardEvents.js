const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
button.innerText = "Click Me!";
input.setAttribute("placeholder", "Type Something")
input.setAttribute("type", "text");
body.append(input);
body.append(button);

// Single Click => Pointer Event
// DoubleClick => Mouse Event

// Event Argument is Passed By Default In Case Of Callback Functions In Event Listners.
button.addEventListener("dblclick", function(event) {
    console.log(event);
    console.log("\nThe Button is Clicked Twice");
})

// KEYBOARD EVENTS :
//  i) Keydown : When any key is pressed
// ii) Keyup : When any pressed key is released.

// For Keyboard Event Objects :
// Key  => Returns The Key Pressed On The Keyboard
// Code => Returns The Code Associated With The Key Pressed
// For ex : " " If Spacebar Pressed, "KeyA" If "A" Is Pressed, "Digit1" If "1" Is Pressed


input.addEventListener("keydown", function(event){
    console.log(`\n\nThe "${event.key}" Key Is Pressed.`);
    console.log(`The Code Of The "${event.key}" Key Is "${event.code}"`);
    console.dir(event);
});

input.addEventListener("keyup", function(event){
    console.log(`\n\nThe "${event.key}" Key Is Released.`);
    console.log(`The Code Of The "${event.key}" Key Is "${event.code}"`);
    console.dir(event);
});