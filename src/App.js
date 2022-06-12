import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Ticket from './components/pages/Ticket';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/ticket' element={<Ticket/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
  );
}

export default App;
