import { renderWithProviders } from './test/test-utils';
import App from './App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, it } from 'vitest';

describe('Main router tests', () => {
  it('it can navigate to the dashboard pages', () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/video game sales analysis/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/dashboard/i), leftClick);
    expect(screen.getByText(/top 10 platforms by video game count/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/details/i), leftClick);
    expect(screen.getByText(/placeholder for future table with full dataset/i)).toBeInTheDocument();
  });

  test('Lading on a Page not Found', () => {
    renderWithProviders(<App />, { route: '/something-that-does-not-match' });
    expect(screen.getByText(/this page does not exist/i)).toBeInTheDocument();
  });
});
