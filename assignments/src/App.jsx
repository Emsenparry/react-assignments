import './App.scss';
import { BrowserRouter } from "react-router-dom"
import AppRouter from './components/router/AppRouter';
import Header from './components/partials/header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <AppRouter />
    </div>
    </BrowserRouter>
  );
}

export default App;
