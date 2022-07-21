import React from "react";
import Testa from "./componentCard/Test";
import './componentCard/style/style.css'
import add from "./componentCard/data"



function App() {
  return (
    <div className="d-flex wrap w-100 ">
      <div className="header">
       <div className="itemInput"> <label>Title : </label> <input id="title" type="text" /></div>
       <div className="itemInput"> <label>Name : </label> <input id="title" type="text" /></div>       
       <div className="itemInput"> <label>MESSEGE : </label> <textarea rows="4" name="comment" /></div>

       <button id="addNew">Add</button>
        
      </div>
      <div className="main d-flex flex-wrap">     
      {        
      add().map(arr=>{
        return <Testa tit={arr.title} mess={arr.mess} name={arr.name}/>        
      })
      }
      </div>
    </div>
  );
}

export default App;
