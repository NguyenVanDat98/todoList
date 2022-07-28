import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import add from "../../data";
import Sidebar from "../../component/sidebar";

import "../style.css";
import Todolist from "../../component/todolist";

const Main = (props) => {

  const [index, setInd] = useState(0);
  const [change, setchange] = useState(true);

let arr = props.arr;
let aii = props.aii;
let data = props.data;





  arr.forEach((e, i) => {
  e.forEach((a, index) => {
    a.btn = a.stt == "New" ? "Start" : a.stt == "Doing" ? "Done" : "Renew";
  });
  });

///////change status data item  111111/////

    function settxtt(e) {
      const allStatus = ["New", "Doing", "Done","Renew"]
      arr[index].map((a, i) => {
        if (i == e.target.id) {
          let temp = 0;
          allStatus.forEach((atus,index)=>{
             if(a.stt == atus && temp==0 && a.stt!="Done"){
              a.stt= allStatus[index+1]
              a.btn = allStatus[index+2]
              temp++            
            }else if(a.stt == "Done" && temp==0 ){
              a.stt= allStatus[0]
              a.btn = allStatus[1]
            }
          })
          console.log(a);
        }
      });
      setchange(!change);
    }
///////change status data item  222222/////
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

  function runtime(e){
    // setchange(!change);
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

  //////////////click Botton page/////////////
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

///////////////BUTTON NEXT///////////////////
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

  /////////////////BUTT PER////////////////////
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
            })

          document.querySelectorAll(".check button").forEach((el,ii) => {  
            if (cont==ii) {
                el.classList.add("active")
            }
            });
        setInd(index-1);
      }
  }
//////////////////////////
  function sortNew(e) {
    const item = data.filter(function (arr) {
      if (arr.stt == e) {
        return console.log(arr);
      }
    });
  }
  ////////////////////////

console.log(1);
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