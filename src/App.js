import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './redux/selector';
import { useState } from 'react';
import Cake from './component/Cake';
import Icecream from './component/Icecream';
import Chocolate from './component/Chocolate';

function App() {
  return (
    <div className="App">
      <Cake />
      <Icecream />
      <Chocolate />
    </div>
  );
}
export default App


