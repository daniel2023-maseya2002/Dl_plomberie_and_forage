import { Route, Routes } from 'react-router-dom';
import APropos from './pages/APropos';
import Home from './pages/Home';
import Realisations from './pages/Realisations';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/realisations" element={<Realisations />} />
    </Routes>
  );
}