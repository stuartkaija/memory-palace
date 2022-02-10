import React from 'react';
import './Cards.scss';
import cardBack from '../../assets/images/card-back.jpeg';
import SingleCard from '../SingleCard/SingleCard';

export default function Cards(cards) {

    console.log(cards);
    return (
        <div className='cards'>
            {cards.cards.map((card) => {
                return (
                    <SingleCard 
                        key={card.id}
                        cardFront={card.src}
                        cardBack={cardBack}
                    />
                )
            })}
        </div>
    )
}
