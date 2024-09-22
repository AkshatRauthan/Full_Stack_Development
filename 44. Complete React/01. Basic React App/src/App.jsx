import "./App.css"
import {Title} from "./Title.jsx"
import {ProductTab} from "./ProductTab.jsx"

function App() {
  return (
    // React Fragements => Tag With No Name
    <>
      <Title /><br />
      <ProductTab />
    </>
  );
}

export default App;

// We Can Return Only One Element In A Function
// To Return Multiple Elements Wrap Then in A Div And Return It Present Inside Paranthesis.

// Or Use Fragements

// Fragements In React Helps Us To Return Multiple Objects Without Creating A New 
// Object To Wrap Them.
// This Reduces The Stress On The DOM As The New Div Is Not Created.
// Reduces Nodes Of DOM

// Class is defined by className Here.
// Reason Class => Reserved For Classes In JS (OOPS)
