import './App.css';
import Options from './components/Options';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="background">
      <Home />
      <About />
      <Options />
    </div>
  );
}

export default App;
