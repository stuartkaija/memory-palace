import React from 'react';
import './Cards.scss';
import SingleCard from '../SingleCard/SingleCard';

export default function Cards({ cards, handleChoice, choiceOne, choiceTwo, disabled }) {
    return (
        <div className='cards'>
            {cards.map((card) => {
                return (
                    <SingleCard 
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                )
            })}
        </div>
    )
}
