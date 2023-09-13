import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import state from './components/State';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/State' element={<State />} />
      </Routes>
    </div>
  );
}

export default App;