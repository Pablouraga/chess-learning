import React from 'react';
import './Square.css';

const Square = ({ row, col, onClick }) => {
    const isBlack = (row + col) % 2 === 1;
    const className = isBlack ? "square black" : "square white";
    return <div className={className} onClick={onClick}></div>;
}
export default Square;