// Function To Print Hello WOrld 5 Time In Intervals Of 2s Each.

let id = setInterval(() => {
  console.log("Hello World\n");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 12000);
