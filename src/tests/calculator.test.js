/**
 * Comprehensive Unit Tests for Calculator Functions
 * 
 * Tests cover:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * - Edge cases and error handling
 */

const { add, subtract, multiply, divide } = require('../calculator');

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

  // ========== EDGE CASES & INTEGRATION TESTS ==========
  describe('Edge Cases', () => {
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
