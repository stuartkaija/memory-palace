import { useState } from 'react';
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
  {"src": dog1},
  {"src": dog2},
  {"src": dog3},
  {"src": dog4},
  {"src": dog5},
  {"src": dog6},
] 

function App() {

    // state to store cards in and to track turns
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    
    // shuffle cards function
    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
      // shuffle cards with sort method
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: uniqid() }))

        setCards(shuffledCards); // this sets the shuffled cards in state
        setTurns(0); // this sets the turn count to 0
    }

    console.log(cards, turns)

    return (
        <main>
            <h1>Memory Palace</h1>
            <button onClick={shuffleCards}>New Game</button>
            <Cards cards={cards}/>
        </main>
    );
}

export default App;
