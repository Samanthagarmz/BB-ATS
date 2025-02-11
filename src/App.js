import './App.css';
import LogIn from './pages/LogIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddCandidate } from './pages/AddCandidate/AddCandidate';

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
          <Route path='/' element={ <AddCandidate /> }/>
          <Route path='/login' element={ <LogIn /> }/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
