import React from 'react'
import './Figure.css';

const Figure = ({ figure }) => {
    const mode = 'd';

    const figureClick = (figure) => {
        console.log(`clicked on ${figure}`);
    }

    return (
        <img
            src={`../assets/Chess_${figure}${mode}t60.png`}
            alt={figure}
            className='figure'
            onClick={() => figureClick(figure)} />
    )
}
export default Figure;
