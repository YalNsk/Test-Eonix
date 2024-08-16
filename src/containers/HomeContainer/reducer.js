import { RESET, DECREMENT, INCREMENT} from "./constant";

export const initialState = {
  counter: 0,
  initialState : 0

};



export default function homeContainerReducer(state = initialState, action) {

  switch (action.type)
   {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
          ...state,
          counter: state.counter - 1,
        };  

    case RESET:
          return {
            ...state,
            counter: state.initialState,
          };

    default:
      return state; 
    }
}


