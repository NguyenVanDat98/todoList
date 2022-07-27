import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import add from "../../data";
import Sidebar from "../../component/sidebar";

import "../style.css";
import Todolist from "../../component/todolist";
const datalocal = JSON.parse(localStorage.getItem("dataa"));

const data = [...add()];
console.log(data);
const arr = [];
const aii = [];
data.forEach((e, i) => {
  if ((i + 1) % 12 == 0 && i != 0) {
    arr.push(data.slice(i - 11, i + 1));
    aii.push(arr.length);
  }
  if (i == add().length - 1) {
    if ((i + 1) % 12 !== 0) {
      console.log("index min " + (i + 1 - ((i + 1) % 12)));
      console.log("max " + i);
      console.log((i + 1) % 12);
      arr.push(data.slice(i + 1 - ((i + 1) % 12)));
      aii.push(arr.length);
    }
  }
});
arr.forEach((e, i) => {
  e.forEach((a, index) => {
    a.btn = a.stt == "New" ? "Start" : a.stt == "Doing" ? "Done" : "Renew";

  });
});
console.log(aii);

const Main = (props) => {
  const [index, setInd] = useState(0);
  const [change, setchange] = useState(true);
//   const [Arrayy, setarray] = useState(arr[index]);
//   const [statePagination ,setState] = useState({next:true, pre:true})
    // useEffect(runtime(index),[])
  function settxt(e) {
    console.log(e.target.id);
    arr[index].map((a, i) => {
      if (i == e.target.id) {
        if (a.stt == "New") {
          a.stt = "Doing";
          a.btn = "Done";
        } else if (a.stt == "Doing") {
          a.stt = "Done";
          a.btn = "Renew";
        } else {
          a.stt = "New";
          a.btn = "Doing";
        }
        console.log(a);
      }
    });
    setchange(!change);
  }
  function runtime(e,a){
    setchange(!change);
    console.log(index);
    if (e<1){
       
       document.querySelectorAll(".check button").forEach((el,indexx)=>{
            indexx<=2? el.style.display= "block": el.style.display= "none"
       })
    }else if (e == arr.length-1 ){
   
        document.querySelectorAll(".check button").forEach((el,indexx)=>{
            indexx<=arr.length-4? el.style.display= "none": el.style.display= "block"
        })
    }else {
       

        document.querySelectorAll(".check button").forEach((el,indexx)=>{
            (indexx >= e-1 && indexx-1 <= e)? el.style.display= "block" : el.style.display= "none"
        })
    }
   

  }
  function clickk(e){

    aii.forEach((item , i) => {
      e.target.id == i ? setInd(i) : console.log();;
    });
    runtime(e.target.id ,1);

    document.querySelectorAll(".check button").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    

  }
  function nexts(){
    let temp=0;
    runtime(index);
      if(index!==arr.length-1){
        document.querySelectorAll(".check button").forEach((el) => {
            if(el.classList.contains("active")){
                el.classList.remove("active");
                temp++
            }else if(temp==1){
                el.classList.add("active");
                temp--;
            } 
          });
          setInd(index+1)
      };
  }
  function prer() {
    let temp = 0;
    let cont;
    runtime(index);
      if(index!==0){
        document.querySelectorAll(".check button").forEach((el,ii) => {
                if(el.classList.contains("active")){
                    el.classList.remove("active");
                    temp++;
                    cont = ii-1;
                }
            });

          document.querySelectorAll(".check button").forEach((el,ii) => {  
            if (cont==ii) {
                el.classList.add("active")
            }
            });
        setInd(index-1);
      }
       

      
      
  }

  function sortNew(e) {
    const item = data.filter(function (arr) {
      if (arr.stt == e) {
        return console.log(arr);
      }
    });
  }
  return (
    <div
      id="mainContent"
      style={{ display: "flex", minHeight: "100vh" }}
      className="wrap w-100"
    >
      <div className="sidebarList">
        <Sidebar handbal={sortNew} title={"Sort New"} />
        <Sidebar title={"Sort Done"} />
        <Sidebar title={"Sort Doing"} />
        <Sidebar title={"Sort New"} />
      </div>
      <div className="main-layout" id="mainContent">

        <div id="list" className="w-100">
          {<Todolist eventt={settxt} data={arr[index]} />}
        </div>
        <div className="pagination mt-4 d-flex justify-content-center" >
            <button onClick={prer} id="pre" disabled={index==0 ? true : false}>Pre</button>
            <div className="check mx-auto">
                {                   
                aii.map((arc, i) => (                    
                      <button onClick={clickk} key={i} className={i==0 ?"active":""} style={{display : i>2 ?"none":"block"}} id={i}> {arc}   </button>                     
                ))
                }
             </div>
            <button onClick={nexts} id="next" disabled={index==arr.length-1 ? true : false}>Next</button>
        </div>
        
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
