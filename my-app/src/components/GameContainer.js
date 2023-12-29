import React, { useState } from "react";
import {
  tileGenerator,
  create,
  move,
  findMatches,
} from "../gameLogic/gameLogic";
import { useSelector } from "react-redux";

function GameOfThreeComponent() {
  const rows = 8;
  const cols = 8;
  const generator = tileGenerator();
  const [board, setBoard] = useState(() => create(generator, cols, rows));
  const [selectedTiles, setSelectedTiles] = useState([]);
  const highScore = useSelector((state) => state.highscore.highScore);

  const handleCellClick = (rowIndex, colIndex) => {
    const newSelectedTiles = [
      ...selectedTiles,
      { row: rowIndex, col: colIndex },
    ];
    if (newSelectedTiles.length === 2) {
      const [first, second] = newSelectedTiles;
      const newBoard = move(generator, board, first, second).board;
      setBoard(newBoard);
      setSelectedTiles([]);
    } else {
      setSelectedTiles(newSelectedTiles);
    }
  };

  function startNewGame() {
    const newBoard = create(generator, cols, rows);
    setBoard(newBoard);
    setSelectedTiles([]);
  }

  function submitscore() {
    //submit score
    alert(`Congratulations! You got ${highScore}!`);
  }

  function endgame() {
    //end game
    alert("Congratulations! You have won the game!");
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
              backgroundColor: selectedTiles.some(
                (st) =>
                  st.row === Math.floor(index / cols) && st.col === index % cols
              )
                ? "lightblue"
                : "transparent",
            }}
            onClick={() =>
              handleCellClick(Math.floor(index / cols), index % cols)
            }
          >
            {cell}
          </div>
        ))}
        <button onClick={startNewGame}>Start new game</button>
        <button onClick={submitscore}>Submit Score</button>
        <button onClick={endgame}>End game</button>
      </div>
    </div>
  );
}

export default GameOfThreeComponent;
