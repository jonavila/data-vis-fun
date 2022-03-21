import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Default, DefaultIndex, Details, NotFound } from './routes';

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme }}>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<DefaultIndex />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/details" element={<Details />} />
          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
