import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Photos from '../components/pages/Photos';
import PhotoDetail from '../components/pages/PhotoDetail';
import NotFound404 from '../components/pages/NotFound404';
import Footer from '../components/Footer';

const Routings = () => (
  <Router>
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/photoDetail/:id' element={<PhotoDetail />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      <Footer />
    </main>
  </Router>
);

export default Routings;
