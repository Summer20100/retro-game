import PositionedCharacter from './PositionedCharacter';
import Bowman from './characters/Bowman';

const hero = [
  new PositionedCharacter(new Bowman(2), 8),
  new PositionedCharacter(new Bowman(2), 0)
];

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi('prairie');
    this.gamePlay.redrawPositions(hero);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
