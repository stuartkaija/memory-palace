import { useEffect, useState } from 'react';
import './global.scss';
import uniqid from 'uniqid';
import Cards from './components/Cards/Cards';

// hardcoded image data
import dog1 from '../src/assets/images/dog1.jpeg';
import dog2 from '../src/assets/images/dog2.jpeg';
import dog3 from '../src/assets/images/dog3.jpeg';
import dog4 from '../src/assets/images/dog4.jpeg';
import dog5 from '../src/assets/images/dog5.jpeg';
import dog6 from '../src/assets/images/dog6.jpeg';


const cardImages = [
  {"src": dog1, matched: false},
  {"src": dog2, matched: false},
  {"src": dog3, matched: false},
  {"src": dog4, matched: false},
  {"src": dog5, matched: false},
  {"src": dog6, matched: false},
] 

function App() {

    // state to store cards in, track turns, track user card choices
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    
    // shuffle cards function
    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
      // shuffle cards with sort method
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: uniqid() }))

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards); // this sets the shuffled cards in state
        setTurns(0); // this sets the turn count to 0

    }

    // handle user choices
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    // compare selected cards
    useEffect(() => {
      if (choiceOne && choiceTwo) {
        setDisabled(true);

        if (choiceOne.src === choiceTwo.src) {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.src === choiceOne.src) {
                return {...card, matched: true}
              } else {
                return card
              }
            })
          })
          setTimeout(() => resetTurn(), 1000)
        } else {
          setTimeout(() => resetTurn(), 1000)
        }
      }
    }, [choiceOne, choiceTwo])

    const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns + 1);
      setDisabled(false);
    }

    // start new game immediately
    useEffect(() => {
      shuffleCards()
    }, [])

    return (
        <main>
            <h1>Memory Palace</h1>
            <button onClick={shuffleCards}>New Game</button>
            <h4>Turns: {turns}</h4>
            <Cards
              cards={cards}
              handleChoice={handleChoice}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
              disabled={disabled}
            />
        </main>
    );
}

export default App;
