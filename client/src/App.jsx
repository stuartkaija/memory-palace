import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import uniqid from 'uniqid';
import Modal from 'react-modal';
import NewGameModal from './components/NewGameModal/NewGameModal';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

// hardcoded image data
import dog1 from '../src/assets/images/dog1.jpeg';
import dog2 from '../src/assets/images/dog2.jpeg';
import dog3 from '../src/assets/images/dog3.jpeg';
import dog4 from '../src/assets/images/dog4.jpeg';
import dog5 from '../src/assets/images/dog5.jpeg';
import dog6 from '../src/assets/images/dog6.jpeg';

const defaultCardImages = [
  {"src": dog1, matched: false},
  {"src": dog2, matched: false},
  {"src": dog3, matched: false},
  {"src": dog4, matched: false},
  {"src": dog5, matched: false},
  {"src": dog6, matched: false},
]

Modal.setAppElement('#root');

function App() {
    // state to store cards in, track turns, track user card choices
    const [defaultCards, setDefaultCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [points, setPoints] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false); // disable card flipping momentarily while two choices have been made
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // game set up details
    const [breed, setBreed] = useState(null);
    const [difficulty, setDifficulty] = useState(null);
    // dog array from axios call
    const [dogs, setDogs] = useState(null);

    // NEW GAME
    const newGame = () => {
      // if (/** !breed || */!difficulty) { 
      //   shuffleDefaultCards()
      //   return
      // }

      if (difficulty === "Easy") {
        axios
          .get("https://dog.ceo/api/breed/hound/images/random/4")
          .then((response) => {
            // create array of random dog objects
            const easyDogs = response.data.message.map((dog) => ({
              "src": dog, matched: false, "id": uniqid()
            }))

            setDogs(easyDogs);

          });
      };

      if (difficulty === "Medium") {
        axios
          .get("https://dog.ceo/api/breed/hound/images/random/8")
          .then((response) => {
            // create array of random dog objects
            const mediumDogs = response.data.message.map((dog) => ({
              "src": dog, matched: false, "id": uniqid()
            }));

            setDogs(mediumDogs);

          });
      };

      if (difficulty === "Challenging") {
        axios
          .get("https://dog.ceo/api/breed/hound/images/random/12")
          .then((response) => {
            // create array of random dog objects
            const challengingDogs = response.data.message.map((dog) => ({
              "src": dog, matched: false, "id": uniqid()
            }));

            setDogs(challengingDogs);

          });
      };
    };

    console.log(dogs)

    // shuffle cards/new game
    const shuffleDefaultCards = () => {
      const shuffledCards = [...defaultCardImages, ...defaultCardImages]
      // shuffle cards with sort method
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: uniqid() }))

        setChoiceOne(null);
        setChoiceTwo(null);
        setDefaultCards(shuffledCards);
        setTurns(0);
        setPoints(0);
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
          setPoints(prevPoints => prevPoints + 1)
          setDefaultCards(prevCards => {
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

    // start new game when page loads
    useEffect(() => {
      shuffleDefaultCards()
    }, [])

    // axios call to backend for dog pictures
    useEffect(() => {
      newGame();
    }, [breed, difficulty]);

    // console.log(breed);
    // console.log(dogs);

    return (
        <>
          <main className='App'>
              <Header turns={turns} points={points} setModalIsOpen={setModalIsOpen} />
              <Cards
                cards={defaultCards}
                handleChoice={handleChoice}
                choiceOne={choiceOne}
                choiceTwo={choiceTwo}
                disabled={disabled}
              />
          </main>
          <Modal
            closeTimeoutMS={500}
            isOpen={modalIsOpen}
            onRequestClose={() => {setModalIsOpen(false)}}
          >
            <NewGameModal
              setBreed={setBreed}
              setDifficulty={setDifficulty}
            />
          </Modal>
        </>
    );
}

export default App;
