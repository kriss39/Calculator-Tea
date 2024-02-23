const readlineSync = require('readline-sync');
 function exponentiation(a, b) {
    return Math.pow(a, b);
  }
  
  function squareRoot(a) {
    return Math.sqrt(a);
  }
  
  function modulus(a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero";
    }
    return a % b;
  }
  
  function calculator() {
    console.log("Welcome to the calculator!");
  
    const num1 = parseFloat(readlineSync.question('Enter the first number: '));
    const num2 = parseFloat(readlineSync.question('Enter the second number: '));
  
    console.log("Select operation:");
    console.log("1. Addition (+)");
    console.log("2. Subtraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Exponentiation (^)");
    console.log("6. Square Root (√)");
    console.log("7. Modulus (%)");
  
    const choice = parseInt(readlineSync.question('Enter your choice: '));
  
    let result;
    switch (choice) {
      case 1:
        result = add(num1, num2);
        break;
      case 2:
        result = subtract(num1, num2);
        break;
      case 3:
        result = multiply(num1, num2);
        break;
      case 4:
        result = divide(num1, num2);
        break;
      case 5:
        result = exponentiation(num1, num2);
        break;
      case 6:
        result = squareRoot(num1);
        break;
      case 7:
        result = modulus(num1, num2);
        break;
      default:
        console.log("Invalid choice");
        return;
    }
  
    console.log("Result:", result);
  }
  
  calculator();
  