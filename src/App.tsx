
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';

// Sample image data for the Gallery component
const largeImages = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=600', alt: 'Large Image 1' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800&h=600', alt: 'Large Image 2' },
];

const smallImages = [
  { src: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Small Image 1' },
  { src: 'https://images.unsplash.com/photo-1614159102354-a56945099f9c?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Small Image 2' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600&h=400', alt: 'Small Image 3' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery largeImages={largeImages} smallImages={smallImages} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;