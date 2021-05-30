import { sumar, restar, multiplicar, dividir } from '../maths';

describe('Calculos matematicos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test('Prueba de resta', () => {
    expect(restar(10, 5)).toBe(5);
  });
  test('Prueba de multiplicacion', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
  test('Prueba de division', () => {
    expect(dividir(10, 2)).toBe(5);
  });
});
