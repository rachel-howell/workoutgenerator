import './App.css';
import Homepage from './components/Homepage';
import { WorkoutProvider } from './components/WorkoutContext';

function App() {
  return (
    <div className="App">
      <WorkoutProvider>
        <Homepage />
      </WorkoutProvider>
    </div>
  );
}

export default App;
