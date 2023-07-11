function GameState() {
  return `{
      "point":10,
      "maxPoint":10,
      "level":1,
      "currentTheme":"prairie",
      "userPositions":[]
    }`;
}

class GameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    this.storage.setItem('state', JSON.stringify(state));
  }

  static load() {
    try {
      return JSON.parse(GameState());
    } catch (e) {
      throw new Error('Game state is empty or was not read.');
    }
  }
}

jest.mock('../gameState_test/GameState');
beforeEach(() => {
  jest.resetAllMocks();
});

test('loads actual game state', () => {
  const expected = '{"point":10,"maxPoint":10,"level":1,"currentTheme":"prairie","userPositions":[]}';
  GameState.mockReturnValue(expected);
  const received = GameStateService.load();
  expect(JSON.stringify(received)).toEqual(expected);
});

test('throws error: "Game state is empty or was not read."', () => {
  const expected = '';
  GameState.mockReturnValue(expected);
  expect(() => GameStateService.load()).toThrow();
});
