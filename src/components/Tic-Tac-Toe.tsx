import { useState } from "react";
function Square(props:any) {
  const [value, setValue] = useState(null);
  function handleClick() {
    console.log("Clicked!!");
    props.onClick(props.id);
    if(value === null) {
      setValue(props.turn);
    }
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
export default function Board() {
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function turnHandler(id:any) {
    if (squares[id] === null) {
      squares[id] = turn;
      setSquares(squares);
      setTurn(turn === "X" ? "O" : "X");
      if(calculateWinner()) {
        setGameOver(true);
        return ;
      }
    }
  }
  function calculateWinner() {
    //console.log("calculateWinner method called");
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line = 0; line < lines.length; line++) {
      const [a, b, c] = lines[line];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log("Game Over " + squares[a] + " Won !!!");
        return true;
      }
    }
  }
  return (<div>
    {!gameOver &&
    <div>
        <div className="board-row">
          <Square id={0} turn={turn} onClick={turnHandler} />
          <Square id={1} turn={turn} onClick={turnHandler} />
          <Square id={2} turn={turn} onClick={turnHandler} />
        </div>
        <div className="board-row">
          <Square id={3} turn={turn} onClick={turnHandler} />
          <Square id={4} turn={turn} onClick={turnHandler} />
          <Square id={5} turn={turn} onClick={turnHandler} />
        </div>
        <div className="board-row">
          <Square id={6} turn={turn} onClick={turnHandler} />
          <Square id={7} turn={turn} onClick={turnHandler} />
          <Square id={8} turn={turn} onClick={turnHandler} />
        </div>
        </div>
        } 
        {gameOver && <h1> Game Over!!
          </h1>
          }
      </div>
  );
}
