import React, { useEffect, useState } from 'react';
import Header from './layout/header/Header';
import Main from './layout/main/main';
import "./App.css"
import add from './data';

let datak=()=>{
  let itemdata = localStorage.getItem("dataa")? JSON.parse(localStorage.getItem("dataa")):[];
  let arr=[]; 
  let aii=[]; 
  let dataa=localStorage.getItem("dataa")? []: add();       
      itemdata.forEach((e)=>{
      dataa.push(e)
      })
  const limmit= 12
  dataa.forEach((e, i) => {
      if ((i + 1) % limmit == 0 && i != 0) {
        arr.push(dataa.slice(i - (limmit-1), i + 1));
        aii.push(arr.length);
      }
      if (i == dataa.length - 1) {
        if ((i + 1) % limmit !== 0) {
          arr.push(dataa.slice(i + 1 - ((i + 1) % limmit)));
          aii.push(arr.length);
        }
      }
    });
return {dataTask: dataa , arr:arr, aii :aii}
 }

const App = props => {
     const [change, setchange] = useState(true);
     const [data , setData] = useState (datak())
     const [tus, settus] = useState("none");


  function btn() {
    if (tus === "none") {
      settus("block");
      document.getElementById("mainContent").style.display = "none";
    } else {
      settus("none");
      document.getElementById("mainContent").style.display = "flex";
    }
  }
     console.log(data.dataTask);

  function DataItem(title, name, desscription) {
    this.title = title;
    this.name = name;
    this.stt = "New";
    this.mess = desscription;
  }
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
       (data.dataTask).push(item)
      localStorage.setItem("dataa", JSON.stringify(data.dataTask));
      setData(datak())
      document.getElementById("title").value = "";
      document.getElementById("creator").value = "";
      document.getElementById("desscription").value = "";
      btn();
    }   
  };
  return (
    <div className='App'>
      <Header btn={btn} create={create} tus={tus}/>
      <Main arr={data.arr} aii={data.aii}  data={data.dataTask}/>
    </div>
  );
};


export default App;

