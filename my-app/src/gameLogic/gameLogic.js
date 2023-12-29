function create(generator, width, height) {
  const tiles = [];
  for (let i = 0; i < width * height; i++) {
    tiles.push(generator.next());
  }
  return { width, height, tiles };
}

function positions(board) {
  const positions = [];
  for (let row = 0; row < board.height; row++) {
    for (let col = 0; col < board.width; col++) {
      positions.push({ row, col });
    }
  }
  return positions;
}

function piece(board, position) {
  if (
    position.row < 0 ||
    position.row >= board.height ||
    position.col < 0 ||
    position.col >= board.width
  ) {
    return undefined;
  }
  return board.tiles[position.row * board.width + position.col];
}

function matchCheck(board, first, second) {
  if (
    board.tiles[first.row * board.width + first.col] ===
    board.tiles[second.row * board.width + second.col]
  ) {
    console.log("Match found", first, second);
    return {
      matched: board.tiles[first.row * board.width + first.col],
      positions: [first, second],
    };
  } else {
    return { matched: undefined, positions: [] };
  }
}

function invalidMovesCheck(first, second) {
  return first.row !== second.row && first.col !== second.col;
}

function canMove(board, first, second) {
  if (
    !isPositionWithinBoardBounds(board, first) ||
    !isPositionWithinBoardBounds(board, second) ||
    matchCheck(board, first, second).matched !== undefined ||
    invalidMovesCheck(first, second)
  ) {
    return false;
  }
  return true;
}

function isPositionWithinBoardBounds(board, position) {
  const isRowValid = position.row >= 0 && position.row < board.height;
  const isColValid = position.col >= 0 && position.col < board.width;
  return isRowValid && isColValid;
}

function move(generator, board, first, second) {
  if (!canMove(board, first, second)) {
    return { board, effects: [] };
  }

  const effects = [];
  const firstTile = board.tiles[first.row * board.width + first.col];
  const secondTile = board.tiles[second.row * board.width + second.col];
  board.tiles[first.row * board.width + first.col] = secondTile;
  board.tiles[second.row * board.width + second.col] = firstTile;

  let matchesFound = true;
  while (matchesFound) {
    const matches = findMatches(board);
    if (matches.length > 0) {
      const positionsToRemove = new Set();
      for (let match of matches) {
        effects.push({ kind: "Match", match: match });
        for (let position of match.positions) {
          positionsToRemove.add(`${position.row}-${position.col}`);
        }
      }

      for (let col = 0; col < board.width; col++) {
        let emptyRow = board.height - 1;
        for (let row = board.height - 1; row >= 0; row--) {
          const positionKey = `${row}-${col}`;
          if (!positionsToRemove.has(positionKey)) {
            if (row !== emptyRow) {
              board.tiles[emptyRow * board.width + col] =
                board.tiles[row * board.width + col];
            }
            emptyRow--;
          }
        }
        while (emptyRow >= 0) {
          board.tiles[emptyRow * board.width + col] = generator.next();
          emptyRow--;
        }
      }
      effects.push({ kind: "Refill" });
    } else {
      matchesFound = false;
    }
  }
  return { board, effects };
}

function findMatches(board) {
  const matches = [];

  // Check horizontal matches
  for (let row = 0; row < board.height; row++) {
    let match = { matched: undefined, positions: [] };
    for (let col = 0; col < board.width; col++) {
      const position = { row, col };
      const tile = piece(board, position);
      if (tile === match.matched) {
        match.positions.push(position);
      } else {
        if (match.positions.length >= 3) {
          matches.push(match);
        }
        match = { matched: tile, positions: [position] };
      }
    }
    if (match.positions.length >= 3) {
      matches.push(match);
    }
  }

  // Check vertical matches
  for (let col = 0; col < board.width; col++) {
    let match = { matched: undefined, positions: [] };
    for (let row = 0; row < board.height; row++) {
      const position = { row, col };
      const tile = piece(board, position);
      if (tile === match.matched) {
        match.positions.push(position);
      } else {
        if (match.positions.length >= 3) {
          matches.push(match);
        }
        match = { matched: tile, positions: [position] };
      }
    }
    if (match.positions.length >= 3) {
      matches.push(match);
    }
  }

  return matches;
}
