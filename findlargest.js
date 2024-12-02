function findLargestNumber() {
    const num1 = parseInt(prompt("Enter the first number:"));
    const num2 = parseInt(prompt("Enter the second number:"));
    const num3 = parseInt(prompt("Enter the third number:"));
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      console.log("Please enter valid integers.");
      return;
    }
    const largest = Math.max(num1, num2, num3);
    console.log(`The largest number is: ${largest}`);
  }
  
  findLargestNumber();
  