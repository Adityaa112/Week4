// src/utils/math.test.ts
import { add, multiply, divide, isEven } from './math';

describe('Math Utilities', () => {

  describe('add()', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, 1)).toBe(0);
    });

    it('should handle two negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
    it ('should handle adding zero', () => {        expect(add(5, 0)).toBe(5);
    });
  });

  describe('multiply()', () => {
    it('should multiply two numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    it('should return zero when multiplying by zero', () => {
      expect(multiply(99, 0)).toBe(0);
    });
    it('should handle two negative numbers', () => {
        expect(multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide()', () => {
    it('should divide correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should handle two negative numbers', () =>{
        expect(divide(-10, -2)).toBe(5);
    });
  });

  describe('isEven()', () => {
    it('should return true for even numbers', () => {
      expect(isEven(-4)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(7)).toBe(false);
    });
  });
});
