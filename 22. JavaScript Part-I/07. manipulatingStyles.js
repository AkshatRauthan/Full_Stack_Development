// To Manipulate the Styling Of An HTML Element We Can Change The Properties That Are 
// Present In The Style Object That Is Present In The Object Of The Corresponding  Element.

// The Style Property Can Only Access The Inline Styling Of The Document.
// We Can't Access The Properties That Are Placed In The CSS File.
// Due To Which This method is Not Frequesntly Used For Manipulating The Styling Of The Document.

const h1 = document.querySelector("h1");
const style = h1.style;
style.color = "green";
style.backgroundColor = "yellow";

const boxLinks = document.querySelectorAll(".box a");
for (obj of boxLinks){
    obj.style.color = "red";
};