import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  if ( counter>0 ) { 
    return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span>le compteur est à {counter} </span>
      <button onClick={onIncrement}>+</button>
    </div>
  );}

  else {
    return (
    <div>
    <span>le compteur est à {counter} </span>
    <button onClick={onIncrement}>+</button>
    </div>

  )}
 
};

export default Home;
