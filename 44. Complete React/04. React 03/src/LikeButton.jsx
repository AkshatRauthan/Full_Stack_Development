import { useState } from "react";

// After Every Change In State The Whole Comonent Is Rendered Again.
// All Lines Are Executed Except The Declaration Of State Variables.
// The Updation Of State Values Took Place After The Whole Component Is Re-rendered.
// Not During Function Call.

export function LikeButton(){
    let [isLiked, setStatus] = useState(false), [currCount, setCount] = useState(0);
    console.log("The Component Is Rendered Again.");
    let toogler = () => {
        let newVal = !isLiked;
        setStatus(newVal);
        setCount(++currCount);
        (newVal) ? console.log("Liked The Post") : console.log("Unliked The Post.")
    }

    let styles = isLiked? {color : 'red'} : {};
    return (
        <><h2>
            Clicks Counter : {currCount}
            </h2><h2>
            {isLiked? " Unlike : " : " Like : "}
            <i onClick={toogler} className={isLiked? "fa-solid fa-heart": "fa-regular fa-heart"} style={styles}></i>
        </h2></>
    )
}