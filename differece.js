function calculateDifference() {
    const number = parseFloat(prompt("Enter a number:"));
    if (isNaN(number)) {
      console.log("Please enter a valid number.");
      return;
    }
    const difference = Math.abs(number - 13);
    const result = number > 13 ? 2 * difference : difference;
  
    console.log(`The result is: ${result}`);
  }
  calculateDifference();
  