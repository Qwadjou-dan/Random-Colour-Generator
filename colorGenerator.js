
// An array consisting af all hex values needed to create a color
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// A function to generate a random value from the array
function randomColor() {
  return Math.floor(Math.random() * hex.length);
}

// DOM to access the HTML element with the specified id
 const generateBtn = document.getElementById("js-generateBtn")

//  An event listener to initiate the looping
 generateBtn.addEventListener('click', () => {
    let hexColor = "#"

    // This loops through the array 6 times which runs the function hence returning 6 values  and creating a hex color
    for(let i = 0; i < 6; i++) {
      hexColor += hex[randomColor()];
    }

    console.log(hexColor);

// DOM to save the loop output to the HTML element
    document.querySelector('.js-displayColor')
      .innerHTML = `${hexColor}`;

// DOM to change the background color of the page
    document.body.style.backgroundColor = hexColor;
 })

