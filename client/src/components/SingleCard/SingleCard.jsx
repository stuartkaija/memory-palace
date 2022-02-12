import React from 'react';
import './SingleCard.scss';
import cardBack from '../../assets/images/card-back.jpeg';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };
    
    return (
        <div className='card'>
            <img className={flipped ? "card__front card__front--flipped" : "card__front"} src={card.src} alt="card front" />
            <img className={flipped ? "card__back card__back--flipped" : "card__back"} src={cardBack} onClick={handleClick} alt="card back" /> 
        </div>
    )
}
