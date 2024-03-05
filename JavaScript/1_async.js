async function wet() {
  let delhi_wet = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Degrees");
    }, 1000);
  });
  let mumbai_wet = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("20 Degrees");
    }, 7000);
  });
  let delhiw = await delhi_wet;
  let mumbaiw = await mumbai_wet;
  return [delhiw, mumbaiw];
}

console.log("Weather Check");
let a = wet();
console.log(a);
