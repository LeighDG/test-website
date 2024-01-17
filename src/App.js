import './App.css';
import  Navbar from './components/Navebar';
import  Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './pages/Menu';
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
       <Routes>
        <Route path='/test-website/' exact element={<Home />}/>
        <Route path='/menu' exact element={<Menu />}/>
        <Route path='/about' exact element={<About />}/>
       </Routes>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
