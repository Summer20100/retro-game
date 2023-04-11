import Character from '../Character';
import Swordsman from '../characters/Swordsman';

test('the character was created successfully', () => {
  const mrAdam = new Swordsman();
  expect(mrAdam.attack).toBe(40);
});

const result = 'Please do not use "new Character()"';

test('throws error: Please do not use "new Character()"', () => {
  expect(() => {
    const daemon = new Character();
    return daemon;
  }).toThrow(result);
});
