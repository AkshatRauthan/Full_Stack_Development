// State is A Built In React Object That Is Used To Contain Data Or Information About The Components.
// A Components State Can Change Over Time. Whenever It Changes, The Component Gets Re-Rendered.

// Hookes Are Methods/Functions That Let Us Use State And Other React Features Belonging To Class
// Components Directly Into Our Functional Components Without Actually Creating A New Class Component.

// State Variables Can't Be Initiazlized Outside The Component.
// There Can Be Any Number Of State Variables For A SIngle React Component.

import { useState } from "react";

export function Counter(){
    let [count, setCount] = useState(0);

    // This Above Statement Have The Following Implications :-
    //  i) count is initialized with 0.
    // ii) Whenever the value of count is change THROUGH THE setCount CALLBACK only then the Conter Will Be Re-rendered

    let incCount = () => {
        setCount((count) => {
            return count + 1;
        });
        setCount((count) => {
            return count + 1;
        });
        console.log(count);
        // Will Print The Updated Value As The New Value Will Be Updated After Re-Rendering.
    };

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}> Increase Count </button>
        </div>
    )
}

// Find Out Why count++, count+1, (++count and count+=1) Give Diffrent Result Inside setCount().