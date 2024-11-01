import { useEffect, useState } from "react";

export default function Counter() {
  let [countX, setCountX] = useState(0);
  let [countY, setCountY] = useState(0);
  let [countZ, setCountZ] = useState(0);

  let incrementCountX = () => setCountX(countX + 1);
  let incrementCountY = () => setCountY(countY + 1);
  let incrementCountZ = () => setCountZ(countZ + 1);
  
  // Usage Case 1 : Passing A Function => Will Triger With Change In Any Available State Variable
  useEffect(function SetupBoth(){
    console.log("Counter Rendered");
  });

  // Usage Case 2 : Passing A Function With Dependencies => Will Triger With Change In The Passed State Variables
  useEffect(function SetupBoth(){
    console.log("Counter X Is Rendered!");
  }, [countX]);

  // Usage 3 : Passing Empty Dependencies => Will Triger Upon The First Rendering Of Component Only.
  useEffect(function FirstRender(){
    console.log('The Counters Are Rendered For The First Time!');
  }, []);

  return (
    <div>
      <h3> Count&nbsp; X  &nbsp; Is &nbsp; {countX} &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={incrementCountX}> +1 </button>
      </h3>

      <h3> Count&nbsp; Y  &nbsp; Is &nbsp; {countY} &nbsp;&nbsp;&nbsp;&nbsp; 
        <button onClick={incrementCountY}> +1 </button>
      </h3>

      <h3> Count&nbsp; Z  &nbsp; Is &nbsp; {countZ} &nbsp;&nbsp;&nbsp;&nbsp; 
        <button onClick={incrementCountZ}> +1 </button>
      </h3>

    </div>
  );
}

// The useEffect Is Used To Perform Some Tasks Every Single Time The Component Is Rendered Or Its State Is Changed.