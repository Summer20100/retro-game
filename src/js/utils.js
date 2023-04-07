/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  const tableSize = boardSize ** 2;
  const tableCellsInLine = boardSize - 1;
  if (index === 0) {
    return 'top-left';
  }
  if (index === tableCellsInLine) {
    return 'top-right';
  }
  if (index === tableSize - 1) {
    return 'bottom-right';
  }
  if (index === tableSize - 1 - tableCellsInLine) {
    return 'bottom-left';
  }
  if (index > 0 && index < tableCellsInLine) {
    return 'top';
  }
  if (index % boardSize === 0) {
    return 'left';
  }
  if ((index + 1) % boardSize === 0) {
    return 'right';
  }
  if (index > (tableSize - 1 - tableCellsInLine) && index < (tableSize - 1)) {
    return 'bottom';
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
