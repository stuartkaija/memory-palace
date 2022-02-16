import React from 'react';
import './NewGameModal.scss';

export default function NewGameModal({ shuffleCards }) {
  return (
    <form className='new-game'>
        <h2 className='new-game__title'>New Game</h2>
        <div className='new-game__container'>
            <label className='new-game__label' htmlFor="breed">Dog Breed</label>
            <input className='new-game__input' type="text" name="breed" id="breed"/>
        </div>
        <div className='new-game__container'>
            <label className='new-game__label' htmlFor="difficulty">Difficulty</label>
            <select className='new-game__select' name="difficulty" id="difficulty">
                <option className='new-game__option' value="">Too Easy</option>
                <option className='new-game__option' value="">Medium</option>
                <option className='new-game__option' value="">Challenging</option>
            </select>
        </div>
        <button className='new-game__button' onClick={shuffleCards}>Begin</button>
    </form>
  )
}
