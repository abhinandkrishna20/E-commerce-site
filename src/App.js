import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Product';
import Mycart from './components/Mycart';
import Login from './components/Login';
import Register from './components/Register';
import Addproduct from './components/Addproduct';


function App() {
  return (
  <>
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mycart' element={<Mycart />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/addproduct' element={<Addproduct />} />

      </Routes>
      {/* <Home /> */}
    </HashRouter>
  </>
   );
}

export default App;
