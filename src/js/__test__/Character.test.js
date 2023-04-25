import Character from '../Character';
import Swordsman from '../characters/Swordsman';

test('the character was created successfully', () => {
  const mikeShortArms = new Swordsman();
  expect(mikeShortArms.attack).toBe(40);
});

test('throws error: Please do not use "new Character()"', () => {
  const result = 'Please do not use "new Character()"';
  expect(() => {
    const daemon = new Character();
    return daemon;
  }).toThrow(result);
});
