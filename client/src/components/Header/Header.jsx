import React from 'react'
import './Header.scss';

export default function Header({ turns, points, setModalIsOpen, shuffleCards }) {
  console.log(typeof setModalIsOpen)
  return (
      <>
        <h1 className='title'>Memory Palace</h1>
        <div className='game-details'>
            <h4 className='game-details__turns'>Turns: {turns}</h4>
            <button className='game-details__button' onClick={() => {setModalIsOpen(true)}}>New Game</button>
            <h4 className='game-details__matches'>Points: {points}</h4>
        </div>
      </>
  )
}
