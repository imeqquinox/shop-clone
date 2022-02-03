import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

// JSONs
import DinnerwareProducts from './products/Dinnerware';
import GlasswareProducts from './products/Glassware';
import ServewareProducts from './products/Serveware';
import FlatwareProducts from './products/Flatware';
import TextileProducts from './products/Textiles';
import BundleProducts from './products/Bundles';

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
        <Route path="/serveware" element={
          <ProductPage 
            title="Serveware"
            bio="Durably crafted and made to last, our serveware adds a refined
                look to weeknight dinners and special occasions alike."
            productList= {ServewareProducts}
          />
        }/>
        <Route path="/flatware" element={
          <ProductPage 
            title="Flatware"
            bio="Crafted by the Herdmar family in the Porto region of Portugal, 
                  our flatware is restaurant quality and treated to last for years of dishwasher cycles."
            productList= {FlatwareProducts}
          />
        }/>
        <Route path="/textiles" element={
          <ProductPage 
            title="Textiles"
            bio="Our textiles are woven in Belgium from 100% pure linen, and make a beautiful 
                (and long-lasting) addition to any tabletop."
            productList= {TextileProducts}
          />
        }/>
        <Route path="/bundles" element={
          <ProductPage 
            title="Bundles"
            bio="Looking to make the perfect set, but don’t know where to start? Look no further.
                We’ve bundled our collections to make it easy to set your table and save."
            productList= {BundleProducts}
          />
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
