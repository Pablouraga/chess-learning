import React from 'react'
import './Figure.css';

const Figure = ({ figure, onClick }) => {
    const mode = 'd';

    return (
        <img
            src={`../assets/Chess_${figure}${mode}t60.png`}
            alt={figure}
            className='figure'
            onClick={() => onClick(figure)} />
    )
}
export default Figure;
