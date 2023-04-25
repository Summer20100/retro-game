const Icon = {
  level: '\u{1F396}',
  attack: '\u{2694}',
  defence: '\u{1F6E1}',
  health: '\u{2764}',
};

export default function propIcons(character) {
  const properties = `${Icon.level}${character.level} ${Icon.attack}${character.attack} ${Icon.defence}${character.defence} ${Icon.health}${character.health}`;
  return properties;
}
