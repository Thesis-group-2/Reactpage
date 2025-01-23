import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CharacterList from './pages/charas';
import DialogueSubmitView from './pages/dialogueSubmit';
import About from './pages/aboutUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header/>
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/dialoguesubmit" element={<DialogueSubmitView />} />
          <Route path="/aboutus" element={<About />} /> 
        </Routes>
    </div>

    <Footer />
    </div>

  );
}

export default App;
