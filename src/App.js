import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Aux from './hoc/Auxil'
import ProfileBody from './components/profileBody/profileBody'

function App() {
  return (
    <Aux className='App'>
      <Header />
      <ProfileBody />
    </Aux>
  );
}

export default App;
