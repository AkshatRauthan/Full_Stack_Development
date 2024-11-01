import { useState, useEffect } from "react";
const url = `https://official-joke-api.appspot.com/random_joke`

let isFetching = true;

export default function Joker(){
  let [joke, setJoke] = useState({
    setup : "",
    punchline : ""
  });

  let getJoke = async () => {
    let joke = await fetch(url);
    let jokeResponse = await joke.json();
    console.log(jokeResponse);
    setJoke({
        ...jokeResponse
    });
  }

  // Practical Use Case Of useEffect In React
  useEffect(() => {
    getJoke();
    isFetching = false;
  }, []);

  return (
    <div>
        <h2>Hear Me Out!</h2>
        <h3>{isFetching && "Fetching Your Joke..."}</h3>
        <h4>{joke.setup}</h4>
        <h4>{joke.punchline}</h4>
        <button onClick={getJoke}>New Joke</button>
    </div>
  )
}