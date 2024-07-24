const url = `https://icanhazdadjoke.com/`;
let joke;

async function GetJokes(){
    try {
        const config = { headers : {Accept : "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
        joke = res.data.joke;
    }
    catch(error){
        joke = `Error! Can't Fetch Dad Jokes.`
        console.log(joke);
    }
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const h3 = document.createElement("h3");

button.addEventListener("click", async function(){
    await GetJokes();
    h3.innerText = joke;
    body.append(h3);
    body.append(button);
});