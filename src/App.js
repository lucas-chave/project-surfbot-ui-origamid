import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
      <Route exact path="/register" component={ Register} />
    </BrowserRouter>
  );
}

export default App;
