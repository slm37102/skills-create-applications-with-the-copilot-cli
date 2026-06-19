#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^, **)
 * - Square Root (sqrt)
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
 * Performs modulo operation (remainder)
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Cannot perform modulo by zero');
  }
  return a % b;
}

/**
 * Performs exponentiation operation (power)
 * @param {number} base - Base number
 * @param {number} exponent - Exponent value
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - Number to find square root of
 * @returns {number} Square root of n
 * @throws {Error} If number is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

/**
 * Main calculator function that processes command-line arguments
 */
function main() {
  const args = process.argv.slice(2);

  // Validate input arguments
  if (args.length < 2) {
    console.error('Invalid input format');
    console.error('Usage:');
    console.error('  node calculator.js <number1> <operator> <number2>  (for binary operations)');
    console.error('  node calculator.js sqrt <number>                    (for square root)');
    console.error('Operators: +, -, *, /, %, ^, **');
    console.error('Examples:');
    console.error('  node calculator.js 10 + 5');
    console.error('  node calculator.js 2 ^ 8');
    console.error('  node calculator.js sqrt 16');
    process.exit(1);
  }

  let result;

  try {
    // Handle square root operation (unary)
    if (args[0].toLowerCase() === 'sqrt') {
      if (args.length !== 2) {
        console.error('Error: sqrt requires exactly one number');
        process.exit(1);
      }
      const num = parseFloat(args[1]);
      if (isNaN(num)) {
        console.error('Error: Input must be a valid number');
        process.exit(1);
      }
      result = squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
      return;
    }

    // Handle binary operations
    if (args.length !== 3) {
      console.error('Invalid input format for binary operation');
      console.error('Usage: node calculator.js <number1> <operator> <number2>');
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
      case '%':
        result = modulo(num1, num2);
        break;
      case '^':
      case '**':
        result = power(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'`);
        console.error('Supported operators: +, -, *, /, %, ^, **');
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
  divide,
  modulo,
  power,
  squareRoot
};

// Run the calculator only if executed directly
if (require.main === module) {
  main();
}
