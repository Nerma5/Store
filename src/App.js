import './App.css';
import React from 'react';
import { Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import Products from './Components/Products';
import MenClth from './Components/MenClth';


function App() {
  return (
    <div className='app'>
    <Header />
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/men' element={<MenClth/>}/>
    </Routes>
    </div>
  );
}

export default App;
