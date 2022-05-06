import './App.css';
import Lead from '../Lead/Lead';
import Forest from '../Forest/Forest';

function App() {
  return (
    <div className="page">
      <Forest>
        <Lead/>
      </Forest>

    </div>
  );
}

export default App;
