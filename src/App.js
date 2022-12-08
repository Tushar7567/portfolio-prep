import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nbar from './components/Nbar';
import Contact from './components/Contact';
// import Team from './components/Team';
import Skills from './components/Skills';
import Project from './components/Project';
import About from './components/About';
import Home from './components/Home';
// import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
     
    <Nbar />
    <Home  />
    <About />
    <Project />
    <Skills />
    {/* <Team /> */}
    <Contact />
    
    </div>
  );
}

export default App;
