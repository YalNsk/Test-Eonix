import React from 'react';

function Home({ onIncrement, onDecrement, reset, counter }) {
  return (
    <div>
    <div className='home'>
      <button onClick={onDecrement} disabled={counter <= 0}>-</button>
      <p>Le compteur est à {counter}</p>
      <button onClick={onIncrement}>+</button>
      
    </div>
    <div>
      <button className='reset' onClick={reset}>RESET</button>
    </div>
    </div>
  );
}

export default Home;