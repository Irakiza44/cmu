import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Navigation from'./components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="navigation " element={<Navigation />} />
        <Route path="footer" element={<Footer/>} />
      </Routes>
    
  );
}

export default App;
