import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import FigurePicker from './components/FigurePicker';

function App() {

  const [selectedFigure, setSelectedFigure] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);

  //Figure translation
  const figureDictionary = new Map([
    ['k', 'king'],
    ['q', 'queen'],
    ['b', 'bishop'],
    ['n', 'knight'],
    ['r', 'rook'],
    ['p', 'pawn'],
  ]);

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
      //Rook
      case 'n': possibleMoves = knightMovement.map(([dx, dy]) => ({
        row: selectedSquare.row + dx,
        col: selectedSquare.col + dy,
      }));
        break;
    }
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
