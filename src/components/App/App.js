import './App.css';
import Lead from '../Lead/Lead';
import Forest from '../Forest/Forest';
import About from '../About/About';

function App() {
  return (
    <div className="page">
      <Forest>
        <Lead/>
        <About/>
      </Forest>

    </div>
  );
}

export default App;
