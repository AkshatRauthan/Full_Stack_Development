let urlCat = "https://catfact.ninja/fact";
let urlDog = `https://dog.ceo/api/breeds/image/random`;
let data, link;
async function RequestCatFact(){
    try{
        let res = await axios.get(urlCat);
        data = res.data.fact;
        console.log(data);
    }
    catch(error){
        data = `Error! Can't Fetch Cat Fact.`;
        console.log(error);
    }
}

async function RequestDogImage(){
    try{
        let res = await axios.get(urlDog);
        link = res.data.message;
        console.log(link);
    }
    catch(error){
        data = `Error! Can't Fetch Gog Image.`;
        console.log(error);
    }
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const h3 = document.createElement("h3");
const image = document.createElement("img");
const span = document.createElement("span");

button.addEventListener("click", async function(){
    await RequestCatFact();
    await RequestDogImage();
    h3.innerText = data;
    image.setAttribute(`src`,link);
    span.append(image);
    span.append(h3);
    body.append(span);
    body.append(this);
});