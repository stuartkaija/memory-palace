import React from 'react'
import './Header.scss';

export default function Header({ turns, shuffleCards }) {
  return (
      <>
        <h1 className='title'>Memory Palace</h1>
        <div className='game-details'>
            <h4 className='game-details__turns'>Turns: {turns}</h4>
            <button className='game-details__button' onClick={shuffleCards}>New Game</button>
            <h4 className='game-details__matches'>Matches: 0</h4>
        </div>
      </>
  )
}
