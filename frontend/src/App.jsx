import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ChildrenProp from './components/FormFill/ChildrenProp';
import Form from './components/FormFill/Form';
import { ClassComponent } from './components/Class/ClassComponent';
import PageFound from './components/Class/PageFound';
import Products from './components/Product/Products';
import OneProduct from './components/Product/OneProduct';
import AddProduct from './components/Product/AddProduct';
import UseMemo from './components/Memo/UseMemo';
import UseCallback from './components/Memo/UseCallback';
import UseReducer from './components/Reducer/UseReducer';
import TestReducer from './components/Reducer/TestReducer';
import GlobalContext from './components/Context/GlobalContext';
import UseReducer1 from './components/Reducer/UseReducer1';
import UseReducer2 from './components/Reducer/UseReducer2';
import CustomHookC from './components/CustomHook/CustomHookC';
import CustomHookLS from './components/CustomHook/CustomHookLS';
import UseReducer3 from './components/Reducer/UseReducer3';
import YourProducts from './components/YourProducts';
import UpdateProduct from './components/UpdateProduct';
import Navbar from './components/Common/Navbar';
import Cart from './components/Cart';


function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<PageFound />} />
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
        <Route exact path='/dynamicstyles' element={<DynamicStyles />} />
        <Route exact path='/childrenprop' element={<ChildrenProp />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/class-component' element={<ClassComponent />} />
        <Route exact path='/Products' element={<Products />} />
        <Route exact path='/OneProduct/:id' element={<OneProduct />} />
        <Route exact path='/AddProduct' element={<AddProduct />} />
        <Route exact path='/UseMemo' element={<UseMemo />} />
        <Route exact path='/UseCallback' element={<UseCallback />} />
        <Route exact path='/UseReducer' element={<UseReducer />} />
        <Route exact path='/TestReducer' element={<TestReducer />} />
        <Route exact path='/GlobalContext' element={<GlobalContext />} />
        <Route exact path='/UseReducer1' element={<UseReducer1 />} />
        <Route exact path='/UseReducer2' element={<UseReducer2 />} />
        <Route exact path='/UseReducer3' element={<UseReducer3 />} />
        <Route exact path='/Customhookc' element={<CustomHookC />} />
        <Route exact path='/Customhookls' element={<CustomHookLS />} />
        <Route exact path='/YourProduct/:id' element={<YourProducts />} />
        <Route exact path='/UpdateProduct' element={<UpdateProduct />} />
        <Route exact path='/Navbar' element={<Navbar />} />
        <Route exact path='/Cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;