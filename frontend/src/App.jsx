import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/Effect/Effect1';
import Effect2 from './components/Effect/Effect2';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Profile' element={<Profile />} />
        <Route exact path='/Counter' element={<Counter />} />
        <Route exact path='/Effect1' element={<Effect1 />} />
        <Route exact path='/Effect2' element={<Effect2 />} />
      </Routes>
    </div>
  );
}

export default App;