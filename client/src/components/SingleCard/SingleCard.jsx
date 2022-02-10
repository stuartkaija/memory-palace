import React from 'react';
import './SingleCard.scss';

export default function ({ cardFront, cardBack }) {
  return (
    <div className='card'>
        <img className='card__front' src={cardFront} alt="card front" />
        <img className='card__back' src={cardBack} alt="card back" />
    </div>
  )
}
