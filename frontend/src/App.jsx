import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Effect1 from './components/Effect/Effect1';
import Effect2 from './components/Effect/Effect2';
import Effect3 from './components/Effect/Effect3';
import Effect4 from './components/Effect/Effect4';
import Params from './components/SingleProduct/Params';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Mapping from './components/Map,Ternary,Styled/Mapping';
import Ternary from './components/Map,Ternary,Styled/Ternary';
import StyledComponents from './components/Map,Ternary,Styled/StyledComponents';
import CounterSe from './components/Map,Ternary,Styled/CounterSe';
import DynamicStyles from './components/Dynamic/DynamicStyles';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/effect1' element={<Effect1 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/singleProduct/:id' element={<SingleProduct />} />
        <Route exact path='/mapping' element={<Mapping text={'Hii'} names={["Sagar", "Akshay", "Rahul", "Shikhar"]} />} />
        <Route exact path='/ternary' element={<Ternary loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path='/styledComponents' element={<StyledComponents />} />
        <Route exact path='/counterSe' element={<CounterSe />} />
        <Route exact path='/DynamicStyles' element={<DynamicStyles />} />
      </Routes>
    </div>
  );
}

export default App;