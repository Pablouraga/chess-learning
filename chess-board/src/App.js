import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import FigurePicker from './components/FigurePicker';

function App() {

  const [selectedFigure, setSelectedFigure] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleFigurePicked = (figure) => {
    setSelectedFigure(figure);
  }

  const handleSquarePicked = (row, col) => {
    if (selectedFigure != null) {
      setSelectedSquare({ row, col });
      // console.log(`Row: ${row}, Col: ${col}, Figure: ${selectedFigure.name}, Alias: ${selectedFigure.key}`);
      calculatePossibleMoves({ row, col }, selectedFigure);
      setSelectedFigure(null);
      setSelectedSquare(null);
    }
  }

  //Figure movement
  //King
  const kingMovement = [
    [0, +1],
    [0, -1],
    [+1, 0],
    [-1, 0],
    [+1, +1],
    [+1, -1],
    [-1, +1],
    [-1, -1],
  ];

  //Rook
  const knightMovement = [
    [+1, +2],
    [+1, -2],
    [-1, +2],
    [-1, -2],
    [+2, +1],
    [+2, -1],
    [-2, +1],
    [-2, -1]
  ];

  const calculateRookMovement = (selectedSquare) => {
    const { row, col } = selectedSquare;
    const possibleMoves = [];

    //Row
    for (let rowCounter = 0; rowCounter < 8; rowCounter++) {
      if (rowCounter !== row) {
        possibleMoves.push({ row: rowCounter, col })
      }
    }

    //Col
    for (let colCounter = 0; colCounter < 8; colCounter++) {
      if (colCounter !== col) {
        possibleMoves.push({ row, col: colCounter })
      }
    }
    return possibleMoves;
  }

  const calculatePossibleMoves = (selectedSquare, selectedFigure) => {
    console.log(`Figure: ${selectedFigure.name}, Square:`, selectedSquare);
    console.log(selectedFigure.key)
    let possibleMoves = [];
    switch (selectedFigure.key) {
      //King
      case 'k': possibleMoves = kingMovement.map(([dx, dy]) => ({
        row: selectedSquare.row + dx,
        col: selectedSquare.col + dy,
      }));
        break;

      //Knight
      case 'n': possibleMoves = knightMovement.map(([dx, dy]) => ({
        row: selectedSquare.row + dx,
        col: selectedSquare.col + dy,
      }));
        break;

      //Rook
      case 'r':
        possibleMoves = calculateRookMovement(selectedSquare);
        break;

      default:
        break;
    }

    //filter out squares out of the board
    possibleMoves = possibleMoves.filter(
      (move) =>
        move.row >= 0 && move.row <= 7 && move.col >= 0 && move.col <= 7
    )
    console.log(possibleMoves)
  };

  return (
    <div className="App">
      <h1>Chess Learning</h1>
      <div className="main-container">
        <Board onClick={handleSquarePicked} />
        <FigurePicker onClick={handleFigurePicked} />
      </div>
    </div>
  );
}

export default App;
