import React from 'react';
import './FigurePicker.css';
import Figure from './Figure';

const FigurePicker = ({ onClick }) => {
    // Figure array k:king, q:queen, b:bishop, n:knight, r:rook, p:pawn
    // const figures = ['k', 'q', 'b', 'n', 'r', 'p'];

    // Figure map
    const figureMap = new Map([
        ['k', 'king'],
        ['q', 'queen'],
        ['b', 'bishop'],
        ['n', 'knight'],
        ['r', 'rook'],
        ['p', 'pawn'],
    ]);

    return (
        <div className='figure-picker'>
            {[...figureMap.keys()].map((figureKey) => (
                <Figure
                    key={figureKey}
                    figure={figureKey}
                    onClick={() => onClick({key: figureKey, name: figureMap.get(figureKey)})}
                />
            ))}
        </div>
    );
}
export default FigurePicker;