import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  // render(<App />); // Esta línea también debe eliminarse si no se usa App
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});