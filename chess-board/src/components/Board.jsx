import React from 'react';
import Square from './Square';
import './Board.css';

const Board = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
        const squares = [];
        for (let col = 0; col < 8; col++) {
            squares.push(<Square
                key={`${row}-${col}`}
                row={row}
                col={col}
                onClick={() => console.log(`clicked on ${row}, ${col}`)} />);
        }
        board.push(
            <div key={row} className="board-row" >
                {squares}
            </div>
        );
    }
    return <div className='board'>{board}</div>
};

export default Board;