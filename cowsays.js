var cowsay = require("cowsay"); // require means we want to use

console.log(
  // cowsay takes json object
  cowsay.think({
    text: "I'm a cowsay jisko npm se install kiya hey",
    e: "❤️❤️", //eyes
    T: "👅", // tongue
  })
);
console.log(cowsay);
