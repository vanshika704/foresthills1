import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Restaurant from './pages/restaurant';
import Rooms from './pages/Rooms';

import About from './pages/About';
import GaLLery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<GaLLery/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
