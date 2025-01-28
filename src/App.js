import logo from './logo.svg';
import './App.css';
// import FashionPortfolio from './components/FashionPortfolio';
// import PremiumFashionPortfolio from './components/PremiumFashionPortfolio';
// import Fashionista from './components/Fashionista';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Portfolio from './pages/Home/Portfolio/Portfolio';
import Services from './pages/Services';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';
import Contact from './pages/Contact/Contact';
import './styles/main.css';

function App() {
  return (
    <div>
     {/* <FashionPortfolio/>  */}
     {/* <PremiumFashionPortfolio/> */}
     {/* <Fashionista/> */}
     <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
