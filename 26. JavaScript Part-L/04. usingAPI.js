let url = "https://catfact.ninja/fact";

async function RequestCatFact(){
    let request = await fetch(url), data = await request.json();
    console.log(`\n${data.fact}\n`);
}

RequestCatFact();