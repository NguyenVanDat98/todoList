import React, { useEffect, useState } from 'react';
import Header from './layout/header/Header';
import Main from './layout/main/main';

import "./App.css"
import add from './data';
import { datak } from './run';
import { Routes ,Route } from 'react-router-dom';
import Form from './component/Form';

const App = props => {
     const [change, setchange] = useState(true);
     const [data , setData] = useState (datak("dataa", add()))
     const [tus, settus] = useState("none");
      console.log(data);
  function btn() {
    setchange(!change)
  
   setData(datak("dataa", add())) 
  }
 
  return (
    <div className='App'>
      <Header  btn={btn} tus={tus} change={change}/>    
      <Routes>          
        <Route path="/" element={<Main  arr={data.arr} aii={data.aii}  data={data.dataTask}/>}/>
        <Route path='/form' element={<Form/>}/>
        
       </Routes>
    </div>
  );
};


export default App;

