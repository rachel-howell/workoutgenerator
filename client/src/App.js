import './App.css';
import Homepage from './components/Homepage';
import WorkoutCalc from './components/WorkoutCalc';
import Workout from './components/Workout';
import { WorkoutProvider } from './components/WorkoutContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <WorkoutProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/quiz" element={<WorkoutCalc />} />
            <Route path="/workout" element={<Workout />} />
          </Routes>
        </BrowserRouter>
      </WorkoutProvider>
    </div>
  );
}

export default App;
