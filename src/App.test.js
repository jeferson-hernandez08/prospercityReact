import { render, screen } from '@testing-library/react';
import App from './App';

test("debe contener 'doggy'", () => {
  expect(screen.getByrole("heading")).toHaveTextContent(/Doggy Directory/);
  
});
render(<App />);
