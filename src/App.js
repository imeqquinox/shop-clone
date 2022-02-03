import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

import DinnerwareProducts from './products/Dinnerware';
import GlasswareProducts from './products/Glassware';

// TODO
// Fix footer
// Link should send to top of page?

function App() {  
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinnerware" element={
          <ProductPage 
            title="Dinnerware"
            bio="Hand-finished in the Tagus Valley region of Portugal with locally sourced 
                and recycled clays that are fired twice to create everyday durability."
            productList= {DinnerwareProducts}
          />
        }/>
        <Route path="/glassware" element={
          <ProductPage 
            title="Glassware"
            bio="Made in Japan, our soda-lime glassware is lightweight, scratch-resistant, 
                and durable enough for everyday use—and complements any table setting without stealing the show."
            productList= {GlasswareProducts}
          />
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
