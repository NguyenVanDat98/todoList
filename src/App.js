import React, { useEffect, useState } from 'react';
import Header from './layout/header/Header';
import Main from './layout/main/main';
import "./App.css"
import add from './data';
import { datak } from './run';

const App = props => {
     const [change, setchange] = useState(true);
     const [data , setData] = useState (datak("dataa", add()))
     const [tus, settus] = useState("none");
console.log(data);
  function btn() {
    setData(datak("dataa", add()))
    if (tus === "none") {
      settus("block");
      document.getElementById("mainContent").style.display = "none";
    } else {
      settus("none");
      document.getElementById("mainContent").style.display = "flex";
    }
  }
 
  return (
    <div className='App'>
      <Header btn={btn} tus={tus} />
      <Main arr={data.arr} aii={data.aii}  data={data.dataTask}/>
    </div>
  );
};


export default App;

