import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/Effect1';
import Effect2 from './components/Effect2';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/Effect1' element={<Effect1 />} />
        <Route path='/Effect2' element={<Effect2 />} />
      </Routes>
    </div>
  );
}

export default App;