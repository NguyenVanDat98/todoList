import React from "react";
import Testa from "./componentCard/Test";
import './componentCard/style/style.css'
import add from "./componentCard/data"
import Sidebar from "./componentCard/sidebar/Sidebar";


// function eventButton(){
//   add().filter((e)=>{
//     e.title ==="New"?
//   } )
// }

function App(props) {
 
  // let data = getData("Datalists")
  return (
    <div className="d-flex wrap w-100">
      <div className="sidebarList">
        <Sidebar title={"Sort New"}/>
        <Sidebar title={"Sort Done"}/>
        <Sidebar title={"Sort Doing"}/>
        <Sidebar title={"Sort New"}/>
      </div>

      <div id="list" className="main mt-3 flex-wrap" style={{display :"flex"}}>
        {
          
          add().map(arr => 
            <Testa props={props.ii}  tit={arr.title} mess={arr.mess} name={arr.name} />         
          )
        }
      </div>
    </div>
  );
}

export default App;
