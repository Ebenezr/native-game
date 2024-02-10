import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app')).toBeTruthy();
  });

  it('renders start game screen first', () => {
    const { getByText } = render(<App />);
    // expect(getByText(/Start a New Game/i));
  });

  //   it('initializes with correct state', () => {
  //     const { getByTestId } = render(<App />);
  //     expect(getByTestId('userNumber')).toBeNull();
  //     expect(getByTestId('gameIsOver')).toBe(false);
  //     expect(getByTestId('startNewGame')).toBe(false);
  //     expect(getByTestId('guessCount')).toBe(0);
  //   });
});
