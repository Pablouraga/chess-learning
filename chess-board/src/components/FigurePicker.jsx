import React from 'react';
import './FigurePicker.css';
import Figure from './Figure';

const FigurePicker = () => {
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
            {[...figureMap.keys()].map((figure) => (
                <Figure
                    key={figure}
                    figure={figure}
                />
            ))}
        </div>
    );
}
export default FigurePicker;