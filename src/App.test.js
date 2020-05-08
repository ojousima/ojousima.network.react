import React from 'react';
import {render, within} from '@testing-library/react';
import App from './App';

test('renders RuuviTag scan element', () => {
  const {getByTestId} = render(<App />);
  const appHeader = getByTestId('app-header');
  const WebBleInHeader = within(appHeader).getAllByTestId('webble');
  expect(WebBleInHeader.length).toBe(1);
});
