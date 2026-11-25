import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Rodape from './components/Rodape';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Series from './pages/Series';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;