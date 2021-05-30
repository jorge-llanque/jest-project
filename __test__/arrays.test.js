import { arrayColors, arrayFruits } from '../array';

describe('Comprobaremos que existe un elemento', () => {
  test('Tiene una banana', () => {
    expect(arrayFruits()).toContain('banana');
  });
  test('No tiene platano', () => {
    expect(arrayFruits()).not.toContain('PLATANO');
  });
  test('Comprobar el tamaño de un arreglo', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test('Comprobar que existe un color', () => {
      expect(arrayColors()).toContain("azul");
  })
  
});
