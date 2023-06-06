import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
// import {Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes>
        <Route/>
      </Routes> */}
      <Products />
    </div>
  );
}

export default App;
