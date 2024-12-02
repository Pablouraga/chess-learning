import React from 'react';
import './Square.css';

const Square = ({ row, col, onClick, possibleMoves }) => {
    const isHighlighted = possibleMoves.some(
        (move) => move.row === row && move.col === col
    );
    const isBlack = (row + col) % 2 === 1;
    const className = `
        square 
        ${isBlack ? "black" : "white"} 
        ${isHighlighted ? "highlight" : ""}
    `.trim();
    return <div className={className} onClick={onClick} ></div>;
}
export default Square;