import React, { useEffect } from 'react';
import axios from 'axios';
import './NewGameModal.scss';

export default function NewGameModal({ setBreed, setDifficulty, newGame }) {

    const startNewGame = (event) => {
        event.preventDefault()
        setBreed(event.target.breed.value);
        setDifficulty(event.target.difficulty.value);

        newGame();

        // use shuffle cards/new game function HERE to actually start new game I think
        // close Modal at this point? maybe in a timer function so it's not abrupt
    }

    return (
        <form className='new-game' id='newGame' onSubmit={startNewGame}>
            <h2 className='new-game__title'>New Game</h2>
            <div className='new-game__container'>
                <label className='new-game__label' htmlFor="breed">Dog Breed</label>
                <input className='new-game__input' type="text" name="breed" id="breed"/>
            </div>
            <div className='new-game__container'>
                <label className='new-game__label' htmlFor="difficulty">Difficulty</label>
                <select className='new-game__select' name="difficulty" id="difficulty">
                    <option className='new-game__option' value="Easy">Easy</option>
                    <option className='new-game__option' value="Medium">Medium</option>
                    <option className='new-game__option' value="Challenging">Challenging</option>
                </select>
            </div>
            <button className='new-game__button' form='newGame'>Begin</button>
        </form>
    )
}
