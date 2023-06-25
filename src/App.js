import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Filter from './components/Filter';
import Paymentbox from './components/Paymentbox';
import Paymentdetail from './components/Paymentdetail';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search></Search> 
      <Filter></Filter>
      <Paymentbox></Paymentbox>
      <Paymentdetail></Paymentdetail>
      <Paymentdetail></Paymentdetail>
      <Paymentdetail></Paymentdetail>
      <Paymentdetail></Paymentdetail>
      <Paymentdetail></Paymentdetail>
    </div>
  );
}

export default App;
