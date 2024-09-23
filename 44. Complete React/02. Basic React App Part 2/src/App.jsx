import "./App.css"
import {ProductTab} from "./ProductTab.jsx"
import { MessageBox } from "./MessageBox.jsx";

function App() {
  return (
    // React Fragements => Tag With No Name
    <>
      <MessageBox userName="Akshat Rauthan" textColor="rgba(255, 0, 125, 1)" />
      <MessageBox userName="How Are You" textColor="skyblue" />
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
