import Character from '../Character';

export default class Vampire extends Character {
  constructor(level) {
    super(level);
    this.attack = 25;
    this.defence = 25;
    this.type = 'vampire';
    this.distance = 2;
    this.distanceAttack = 2;
  }
}
