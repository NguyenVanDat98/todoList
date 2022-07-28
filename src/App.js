
import React from 'react';
import Header from './layout/header/Header';
import Main from './layout/main/main';
import "./App.css"

const App = props => {
  return (
    <div className='App'>
      <Header/>
      <Main/>
    </div>
  );
};


export default App;
