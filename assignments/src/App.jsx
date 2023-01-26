import './App.scss';
import { GoalList } from './components/assignments/api/goalApiCall';
import Counter from './components/assignments/hooks/counter';
import { Form } from './components/assignments/hooks/form';
import { Counter2 } from './components/assignments/hooks/useEffectExample';
import Greeting from './components/assignments/hooks/useState';
import Timer from './components/assignments/other things/setTimeOut';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Counter />
      <Form />
      <Timer />
      <Counter2 />
      <GoalList />
    </div>
  );
}

export default App;
