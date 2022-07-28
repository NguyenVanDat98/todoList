import React, { useState } from 'react';
import Header from './layout/header/Header';
import Main from './layout/main/main';
import "./App.css"



   
const App = props => {
     const [change, setchange] = useState(true);

let itemdata = localStorage.getItem("dataa")? JSON.parse(localStorage.getItem("dataa")):[];
let data = itemdata?[...itemdata]:[];

  function DataItem(title, name, desscription) {
    this.title = title;
    this.name = name;
    this.stt = "New";
    this.mess = desscription;
  } 
 
  
  console.log(data);
  const create = () => {
    
    let a =0;
    document.querySelectorAll(".formHeader input").forEach((e) => {
      if (e.value == "") {
          console.log(a);
        return a++;
      }
    })
    if (a > 0) {
      alert("trong");
    } else {
      const titleVal = document.getElementById("title").value;
      const creatoreVal = document.getElementById("creator").value;
      const desscriptionVal = document.getElementById("desscription").value;
      const item= new DataItem(titleVal, creatoreVal, desscriptionVal);
       data.push(item)
       console.log(data);
   localStorage.setItem("dataa", JSON.stringify(data));
      document.getElementById("title").value = "";
      document.getElementById("creator").value = "";
      document.getElementById("desscription").value = "";
      setchange(!change)
    }
   
  };
  return (
    <div className='App'>
      <Header create={create}/>
      <Main/>
    </div>
  );
};


export default App;

