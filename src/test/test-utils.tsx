import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  route?: string;
}

function renderWithProviders(ui: ReactElement, { route = '/', ...renderOptions }: ExtendedRenderOptions = {}) {
  window.history.pushState({}, 'Test page', route);
  function Wrapper({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };
