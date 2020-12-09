import React from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyCalculator from './pages/CurrencyCalculator/CurrencyCalculator';
import Clock from './pages/Clock/Clock';
import MagicTable from './pages/MagicTable/MagicTable';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path={['/Table', '/MagicTable']} component={MagicTable}/>
      <Route path='/CurrencyCalculator' exact component={CurrencyCalculator}/>
      <Route path='/' component={Clock}/>
    </Router>
    
  );
}

export default App;
