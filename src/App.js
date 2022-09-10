import { useState } from 'react';

import Dice from './Dice';

import './App.css';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }
  console.log(allNewDice());

  const diceElements = dice.map((die) => (
    <Dice key={Math.random()} value={die} />
  ));

  return (
    <main className='container'>
      <div className='dice_container'>{diceElements}</div>
    </main>
  );
}

export default App;
