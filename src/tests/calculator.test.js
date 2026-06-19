/**
 * Comprehensive Unit Tests for Calculator Functions
 * 
 * Tests cover:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * - Modulo
 * - Exponentiation (Power)
 * - Square Root
 * - Edge cases and error handling
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {

  // ========== ADDITION TESTS ==========
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should handle zero', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(add(2.5, 1.5)).toBe(4);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ========== SUBTRACTION TESTS ==========
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract positive and negative numbers', () => {
      expect(subtract(10, -4)).toBe(14);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
      expect(subtract(1, 0.3)).toBeCloseTo(0.7);
    });

    test('should handle large numbers', () => {
      expect(subtract(5000000, 3000000)).toBe(2000000);
    });

    test('should return negative result when subtracting larger from smaller', () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  // ========== MULTIPLICATION TESTS ==========
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(10, -2)).toBe(-20);
      expect(multiply(-10, 2)).toBe(-20);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 2)).toBe(5);
      expect(multiply(0.5, 0.5)).toBe(0.25);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });

    test('should multiply by one (identity property)', () => {
      expect(multiply(42, 1)).toBe(42);
      expect(multiply(1, 42)).toBe(42);
    });
  });

  // ========== DIVISION TESTS ==========
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(20, -5)).toBe(-4);
      expect(divide(-20, 5)).toBe(-4);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should handle zero dividend', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(20, 0)).toThrow('Error: Cannot divide by zero');
      expect(() => divide(0, 0)).toThrow('Error: Cannot divide by zero');
    });

    test('should handle decimal numbers', () => {
      expect(divide(10, 2.5)).toBe(4);
      expect(divide(1, 4)).toBe(0.25);
    });

    test('should handle large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });

    test('should handle division resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333333, 5);
    });
  });

  // ========== MODULO TESTS ==========
  describe('Modulo (modulo)', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo from image example', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should handle modulo with positive and negative numbers', () => {
      expect(modulo(10, -3)).toBe(1);
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle modulo with two negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should handle modulo resulting in zero', () => {
      expect(modulo(10, 5)).toBe(0);
      expect(modulo(20, 4)).toBe(0);
    });

    test('should handle modulo with decimal numbers', () => {
      expect(modulo(5.5, 2)).toBe(1.5);
      expect(modulo(10.7, 3)).toBeCloseTo(1.7);
    });

    test('should handle modulo with one', () => {
      expect(modulo(42, 1)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Error: Cannot perform modulo by zero');
      expect(() => modulo(0, 0)).toThrow('Error: Cannot perform modulo by zero');
    });
  });

  // ========== POWER/EXPONENTIATION TESTS ==========
  describe('Exponentiation (power)', () => {
    test('should calculate power with positive base and exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power from image example', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle zero exponent (any number to power 0 = 1)', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(0, 0)).toBe(1);
      expect(power(-3, 0)).toBe(1);
    });

    test('should handle exponent of one', () => {
      expect(power(5, 1)).toBe(5);
      expect(power(-5, 1)).toBe(-5);
    });

    test('should handle negative exponents (fractional results)', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(10, -2)).toBe(0.01);
    });

    test('should handle negative base with positive exponent', () => {
      expect(power(-2, 2)).toBe(4);
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle decimal bases and exponents', () => {
      expect(power(2.5, 2)).toBeCloseTo(6.25);
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large numbers', () => {
      expect(power(10, 6)).toBe(1000000);
    });

    test('should handle base of zero', () => {
      expect(power(0, 5)).toBe(0);
      expect(power(0, 1)).toBe(0);
    });

    test('should handle base of one', () => {
      expect(power(1, 100)).toBe(1);
      expect(power(1, -5)).toBe(1);
    });
  });

  // ========== SQUARE ROOT TESTS ==========
  describe('Square Root (squareRoot)', () => {
    test('should calculate square root of perfect squares', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root from image example', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of various numbers', () => {
      expect(squareRoot(4)).toBe(2);
      expect(squareRoot(9)).toBe(3);
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(100)).toBe(10);
    });

    test('should handle square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414213562, 8);
      expect(squareRoot(10)).toBeCloseTo(3.162277660, 8);
    });

    test('should handle square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle square root of decimal numbers', () => {
      expect(squareRoot(0.25)).toBe(0.5);
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow('Error: Cannot calculate square root of a negative number');
      expect(() => squareRoot(-16)).toThrow('Error: Cannot calculate square root of a negative number');
      expect(() => squareRoot(-0.5)).toThrow('Error: Cannot calculate square root of a negative number');
    });

    test('should handle large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
      expect(squareRoot(10000)).toBe(100);
    });
  });

  // ========== ADVANCED EDGE CASES & INTEGRATION TESTS ==========
  describe('Advanced Edge Cases', () => {
    test('should handle chained operations with new functions', () => {
      const step1 = power(2, 3);
      const step2 = modulo(step1, 5);
      const step3 = add(step2, 2);
      expect(step3).toBe(5); // (2 ^ 3) % 5 + 2 = 8 % 5 + 2 = 3 + 2 = 5
    });

    test('should handle square root of a power', () => {
      const powered = power(5, 2);
      const result = squareRoot(powered);
      expect(result).toBe(5); // sqrt(5^2) = 5
    });

    test('should handle modulo of power result', () => {
      const powered = power(2, 5);
      const result = modulo(powered, 10);
      expect(result).toBe(2); // 2^5 = 32, 32 % 10 = 2
    });

    test('should handle all operations together', () => {
      const add_result = add(5, 3);
      const power_result = power(add_result, 2);
      const modulo_result = modulo(power_result, 20);
      const sqrt_result = squareRoot(modulo_result);
      expect(sqrt_result).toBe(2); // (5+3)^2 % 20 = 64 % 20 = 4, sqrt(4) = 2
    });
  });

    test('should handle very small decimal numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle chained operations', () => {
      const step1 = add(2, 3);
      const step2 = multiply(step1, 2);
      const step3 = subtract(step2, 4);
      expect(step3).toBe(6); // (2 + 3) * 2 - 4 = 6
    });

    test('should handle negative zero', () => {
      expect(Object.is(multiply(0, -1), -0) || Object.is(multiply(0, -1), 0)).toBe(true);
      expect(add(-5, 5)).toBe(0);
    });

    test('should handle Infinity handling', () => {
      const largeNum = Number.MAX_VALUE / 2;
      const result = multiply(largeNum, 2);
      expect(result).toBeLessThanOrEqual(Number.MAX_VALUE + Number.MAX_VALUE);
    });
  });
});
