import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

if (!Element.prototype.getRootNode) {
    Element.prototype.getRootNode = function() {
      return this.parentNode || this;
    };
  }
  
describe('Home Component', () => {
    test('renders correctly with initial props', () => {
        const onIncrement = jest.fn();
        const onDecrement = jest.fn();
        const reset = jest.fn();
        const counter = 5;
      
        render(<Home onIncrement={onIncrement} onDecrement={onDecrement} reset={reset} counter={counter} />);
        
        
        screen.debug();   
        
        // Vérification que la partie "Le compteur est à" est présente
        expect(screen.getByText(/Le compteur est à/)).toHaveTextContent('Le compteur est à 5');

      
        // Vérification des boutons
        expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'RESET' })).toBeInTheDocument();
      });
   

  test('calls onIncrement when + button is clicked', () => {
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const reset = jest.fn();
    const counter = 5;

    render(<Home onIncrement={onIncrement} onDecrement={onDecrement} reset={reset} counter={counter} />);

    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);

    expect(onIncrement).toHaveBeenCalled();
  });

  test('calls onDecrement when - button is clicked', () => {
    const onDecrement = jest.fn();
    const onIncrement = jest.fn();
    const reset = jest.fn();
    const counter = 5;

    render(<Home onIncrement={onIncrement} onDecrement={onDecrement} reset={reset} counter={counter} />);

    const decrementButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(decrementButton);

    expect(onDecrement).toHaveBeenCalled();
  });

  test('calls reset when RESET button is clicked', () => {
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const reset = jest.fn();
    const counter = 5;

    render(<Home onIncrement={onIncrement} onDecrement={onDecrement} reset={reset} counter={counter} />);

    const resetButton = screen.getByRole('button', { name: 'RESET' });
    fireEvent.click(resetButton);

    expect(reset).toHaveBeenCalled();
  });

  test('disables the decrement button when counter is 0', () => {
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const reset = jest.fn();
    const counter = 0;

    render(<Home onIncrement={onIncrement} onDecrement={onDecrement} reset={reset} counter={counter} />);

    const decrementButton = screen.getByRole('button', { name: '-' });
    expect(decrementButton).toBeDisabled();
  });
});
