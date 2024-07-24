let url = `http://universities.hipolabs.com/search?name=`, country = 'india', data;

async function GetColleges(){
    try{
        let res = await axios.get(url+country.toLowerCase());
        data = res.data;
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const submit = document.querySelector("button");
const inputBox = document.querySelector("input");
let list = document.createElement("ul");

submit.addEventListener("click", async function(){
    if (["", " ", "  ", "   "].includes(inputBox.value)){
        alert(`Please Enter A Country Name And Try Again.`);
        return;
    }
    country = inputBox.value;
    await GetColleges();
    for (items of document.querySelectorAll("ul *")){
        items.remove();
    }
    let num = 0;
    for (obj of data){
        let listItem = document.createElement("li");
        listItem.innerText = obj.name;
        list.append(listItem);
        num++;
        if (num == 18) break;
    }
    body.append(list);
    h1.innerText = `List Of Prestegious Institutions In ${country}`;
});