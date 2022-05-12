import './App.css';
import Lead from '../Lead/Lead';
import Forest from '../Forest/Forest';
import About from '../About/About';
import Runes from '../Runes/Runes';

function App() {
  return (
    <div className="page">
      <Forest>
        <Lead/>
        <About/>
      </Forest>
      <Runes/>
    </div>
  );
}

export default App;
