import "./App.css"
import { Button } from "./ButtonEvents.jsx";
import { Counter } from "./Counter.jsx";
import { Form } from "./Form.jsx";
import { LikeButton } from "./LikeButton.jsx";

// If Using Export Default Function We Import Using {} Like => import {Form} from "%%%" => This Will Give 
// Us A Blank Page.

function App() {
  return (
    <>
    <h2> States In React </h2>
    <Counter />
    <br /><br />
    <LikeButton />
    </>
  );
}

export default App;