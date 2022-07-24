import React, { useState } from "react";
import Testa from "./component/Test";
import "./App.css"
import './component/style/style.css'
import add from "./component/data"
import Sidebar from "./component/sidebar/Sidebar";


  const arr=[];
  const aii=[];
  add().forEach((e,i)=>{
      if ((i+1)%12==0&& i!=0){
          
          arr.push(add().slice(i-11,i+1))
          aii.push(arr.length)
        }
        if(i==add().length-1){
       if((i+1)%12!==0){         
         console.log("index min " +(i+1-(i+1)%12));
         console.log("max "+i);
         console.log((i+1)%12);
        arr.push(add().slice(i+1-((i+1)%12)));
        aii.push(arr.length)
       }         
        } 
        
  })
  console.log(arr);
  console.log(aii);
  
  
function App(props) {
  const {index ,Loo}=props;
  const [ind ,setInd] =useState("0");
function clickk(e){
   
    arr.forEach((item,i)=>{
      if (e.target.id ==i){
        setInd(i)
      }
    })
  }
  
  return (
    <div className="d-flex wrap w-100">
      
      <div className="sidebarList">
        <Sidebar title={"Sort New"}/>
        <Sidebar title={"Sort Done"}/>
        <Sidebar title={"Sort Doing"}/>
        <Sidebar title={"Sort New"}/>
      </div>  
        <div className="main-layout" id="mainContent" style={{display :"block"}}>
        <div className="check mt-3">
        { 
          aii.map((arc,i)=>
           <button onClick={clickk} key={i} id={i}>{arc}</button>            
          )}        
      </div>  
      <div id="list" className="main m-3 flex-wrap" >
        {          
          arr[ind].map((arr,i) => 
            <Testa key={i} props={props.ii}  title={arr.title} dess={arr.mess} name={arr.name} />         
          )
        }
      </div>
        </div>

    </div>
  );
}

export default App;
