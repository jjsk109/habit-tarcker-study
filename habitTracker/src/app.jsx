
import { computeHeadingLevel } from '@testing-library/react';
import './app.css';
import Habit from './components/habit';

function App() {
  const lists = [
    {id : 0, habit : 'coding', count: 0 },
    {id : 1, habit : 'study', count: 0 },
    {id : 2, habit : 'workl', count: 0 },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Habit Taracker
        </h1>
      
      </header>
      <div>
        <Habit/>
      </div>
    </div>
  );
}

export default App;
