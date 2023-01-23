import './App.scss';
import Counter from './components/assignments/hooks/counter';
import Greeting from './components/assignments/hooks/useState';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Counter />
    </div>
  );
}

export default App;
