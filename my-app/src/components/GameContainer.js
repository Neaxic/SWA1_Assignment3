import React, { useState } from "react";
import {
  tileGenerator,
  create,
  positions,
  piece,
  matchCheck,
  invalidMovesCheck,
  canMove,
  isPositionWithinBoardBounds,
  move,
  findMatches,
} from "../gameLogic/gameLogic";

function GameOfThreeComponent() {
  const rows = 8;
  const cols = 8;
  const generator = tileGenerator();
  const [board, setBoard] = useState(() => create(generator, cols, rows));
  const [matches, setMatches] = useState(() => findMatches(board));

  const handleCellClick = (rowIndex, colIndex) => {
    const newBoard = board.map((row, rIndex) => {
      if (rIndex === rowIndex) {
        const newRow = [...row];
        newRow[colIndex] = (newRow[colIndex] + 1) % 3;
        return newRow;
      }
      return row;
    });
    setBoard(newBoard);
  };

  function startNewGame() {
    console.log("New game");
    const newBoard = create(generator, cols, rows);
    setBoard(create(generator, cols, rows));
    setMatches(findMatches(newBoard));
  }

  function findMatchesOnBoard() {
    setMatches(findMatches(board));
  }

  return (
    <div>
      <h3>Game of Three Component</h3>
      <div style={{ display: "flex", flexWrap: "wrap", width: "400px" }}>
        {board.tiles.flat().map((cell, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
              boxSizing: "border-box",
            }}
            onClick={() =>
              handleCellClick(Math.floor(index / cols), index % cols)
            }
          >
            {cell}
          </div>
        ))}
        <button onClick={startNewGame}>Start new game</button>
        <button onClick={findMatchesOnBoard}>Find match</button>
      </div>
    </div>
  );
}

export default GameOfThreeComponent;
