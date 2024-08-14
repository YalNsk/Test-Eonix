import React from 'react';

function Home({ onIncrement, onDecrement, counter }) {
  return (
    <div>
      <button onClick={onDecrement} disabled={counter <= 0}>-</button>
      <span>Le compteur est à {counter}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default Home;