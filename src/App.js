import { useState } from 'react';

import Dice from './Dice';

import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({ value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return newDice;
  }
  console.log(allNewDice());

  const diceElements = dice.map((die) => (
    <Dice key={Math.random()} value={die.value} />
  ));

  const rollHandler = () => {
    setDice(allNewDice());
  };

  return (
    <main className='container'>
      <div className='dice_container'>{diceElements}</div>
      <button className='btn' onClick={rollHandler}>
        Roll
      </button>
    </main>
  );
}

export default App;
