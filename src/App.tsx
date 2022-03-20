import { Route, Routes } from 'react-router-dom';
import { Dashboard, Default, DefaultIndex, Details, NotFound } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<DefaultIndex />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
