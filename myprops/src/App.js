import { CarData } from './CarData';
import './App.css';
import CarsList from './components/CarsList';

function App() {
  return (
    <div>
      <CarsList car={CarData }/>
    </div>
  );
}

export default App;
