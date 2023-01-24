import './App.scss';
import Counter from './components/assignments/hooks/counter';
import Form from './components/assignments/hooks/form';
import Greeting from './components/assignments/hooks/useState';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
