import { INCREMENT, RESET, DECREMENT } from './constant';


export function incrementAction() {
  return {
    type: INCREMENT,
  };
}


export function decrementAction () {
    return {
      type : DECREMENT,
    };
}

export function resetAction () {
  return {
    type : RESET,
  };
}