#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

/**
 * Performs addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division operation
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Cannot divide by zero');
  }
  return a / b;
}

/**
 * Main calculator function that processes command-line arguments
 */
function main() {
  const args = process.argv.slice(2);

  // Validate input arguments
  if (args.length !== 3) {
    console.error('Invalid input format');
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Operators: +, -, *, /');
    console.error('Example: node calculator.js 10 + 5');
    process.exit(1);
  }

  const [num1Str, operator, num2Str] = args;
  
  // Parse and validate numbers
  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both inputs must be valid numbers');
    process.exit(1);
  }

  let result;

  try {
    // Perform calculation based on operator
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'`);
        console.error('Supported operators: +, -, *, /');
        process.exit(1);
    }

    // Display result
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide
};

// Run the calculator only if executed directly
if (require.main === module) {
  main();
}
