import React, { useState } from 'react';
import Header from './layout/header/Header';
import Main from './layout/main/main';
import "./App.css"




const App = props => {
  const [tus, settus] = useState("none"); 
  const [change, setchange] = useState(true);

  function DataItem(title, name, desscription) {
    this.title = title;
    this.name = name;
    this.stt = "New";
    this.mess = desscription;
  }

  const itemdata = localStorage.getItem("dataa")? JSON.parse(localStorage.getItem("dataa")):[];
const data = itemdata?[...itemdata]:[];
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
      setchange(!true)
      btn();
    }

  };

  function btn() {
    if (tus == "none") {
      settus("block");
      document.getElementById("mainContent").style.display = "none";
    } else {
      settus("none");
      document.getElementById("mainContent").style.display = "flex";
    }
  }
  return (
    <div className='App'>
      <Header btns={btn} eventt={create} render={change} tus={tus}/>
      <Main render={change} />
    </div>
  );
};


export default App;
