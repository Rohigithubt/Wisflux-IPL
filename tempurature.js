function convertTemperature() {
    const temperature = parseFloat(prompt("Enter the temperature:"));
    
    if (isNaN(temperature)) {
      console.log("Please enter a valid number.");
      return;
    }
    
    const convertTo = prompt("Type 'C' to convert to Celsius or 'F' to convert to Fahrenheit:");
  
    let result;
    if (convertTo === "F" || convertTo === "f") {
  
      result = `${temperature}°C is ${(temperature * 9 / 5 + 32).toFixed(2)}°F`;
    } else if (convertTo === "C" || convertTo === "c") {
      result = `${temperature}°F is ${((temperature - 32) * 5 / 9).toFixed(2)}°C`;
    } else {
      result = "Invalid conversion type. Please type 'C' or 'F'.";
    }
  
    console.log(result);
  }
  convertTemperature();
  