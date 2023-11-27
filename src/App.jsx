import { useEffect, useState } from 'react'
import ConfettiGenerator from "confetti-js";
import NewYear from './assets/hny.png';
import './App.css'
import Button from './Button/Button';
import MyConfettiForm from './Form/Form';

function App() {
  const [showMyWishForm, setShowMyWishForm] = useState(false);
  const [myName, setMyName] = useState('');

  useEffect(() => {
    // Configure the confetti settings
    const confettiSettings = {
      target: 'confetti-canvas',
      max: 1000,   // Max number of confetti particles
      size: 1,    // Size of the confetti particles
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]], // Colors of the confetti
      clock: 25,   // Animation speed
      with: window.innerWidth
    };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
      try {
        setMyName(atob(query));
      } catch (er) {
        console.log('query not coming!');
      }
    }
    return () => confetti.clear();

  }, []);


  const handleMyWish = () => {
    setShowMyWishForm(true);
  }

  const handleHomeClick = () => {
    setShowMyWishForm(false);
  }

  return (
    <div className='container'>
      <div className="wish-container">
        {showMyWishForm ? <div>
          <MyConfettiForm handleHomeClick={handleHomeClick} />
        </div> : <div>
          <img src={NewYear} />
          {myName && <h1 className="blink_me">This is {myName}</h1>}
          <p>Wishing you joy, peace, and success in the coming year!</p>
          <Button onClick={handleMyWish} text="Create wish with your name" />
        </div>}
          <a href='https://www.linkedin.com/in/rohit-kumar-303990117' target="_blank" rel="noreferrer">Contact Me</a>
      </div>
      <canvas id="confetti-canvas"></canvas>
    </div>
  )
}

export default App
