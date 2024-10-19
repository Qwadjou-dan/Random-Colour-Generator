
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColor() {
  return Math.floor(Math.random() * hex.length);
}

console.log(randomColor());

  for(let i = 0; i < 6; i++) {
    console.log(hex[randomColor()]);
  }