import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dinnerware from './pages/Dinnerware';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dinnerware" element={<Dinnerware />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
