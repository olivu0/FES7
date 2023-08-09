const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text = "";

text += "<section><h2>" + cars[0] + "</h2></section>";
text += "<section><h2>" + cars[1] + "</h2></section>";
text += "<section><h2>" + cars[2] + "</h2></section>";
text += "<section><h2>" + cars[3] + "</h2></section>";
text += "<section><h2>" + cars[4] + "</h2></section>";

for (let i = 0; i < cars.lenght; i++) {
  text += "<section><h2>" + cars[i] + "</h2></section>";
}

console.log(text);
document.body.innerHTML = text;

document.body.innerHTML = `
  <h1>hello</h1>
  <p>world</p>
  <h1>hello</h1>
  <p>world</p>
`;
