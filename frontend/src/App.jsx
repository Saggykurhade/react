import './App.css';
import {Routes, Route } from 'react-router-dom';
import Homepage from '../../components/Homepage';
import Login from '../../components/Login';
import Register from '../../components/Register';
import Profile from '../../components/Profile';

  
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login' element={<Homepage />} />
        <Route path='/Register' element={<Homepage />} />
        <Route path='/Profile' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
