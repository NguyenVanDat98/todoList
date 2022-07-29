import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


import Sidebar from "../../component/sidebar";
import "../style.css";
import Todolist from "../../component/todolist";
import { datak } from "../../run";
import add from "../../data";

const Main = (props) => {
  const [change, setchange] = useState(true);  
  
  const [index, setInd] = useState(0);
  let arr = props.arr;
  let aii = props.aii;
  let data = props.data;
  
  const [DB, setdata] = useState(data);  
  const [temparr, settemparr] = useState(props.arr);  
  const [ mainArray ,setArray] = useState(temparr[index])
// console.log(data);
// console.log(mainArray);

  temparr.forEach((e, i) => {
  e.forEach((a, index) => {
    a.btn = a.stt == "New" ? "Start" : a.stt == "Doing" ? "Done" : "Renew";
  });
  });

///////change status data item MOD 111111/////

    function settxtt(e) {
      const allStatus = ["New", "Doing", "Done","Renew"]
      temparr[index].map((a, i) => {
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
          // console.log(a);
        }
      });
      setchange(!change);
    }
///////change status data item MOD 222222  BEST CHOSE/////
  function settxt(e) {
    // console.log(e.target.id);
    mainArray.map((a, i) => {
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
        console.log(mainArray);
        console.log("da",DB);
        localStorage.setItem("dataa",JSON.stringify(DB))
      
      }
    });
    setchange(!change);
  }

  function runtime(e){
    // setchange(!change);
    // console.log(index);
    if (e<1){       
       document.querySelectorAll(".check button").forEach((el,indexx)=>{
            indexx<=2? el.style.display= "block": el.style.display= "none"
       })
    }else if (e == temparr.length-1 ){   
        document.querySelectorAll(".check button").forEach((el,indexx)=>{
            indexx<=temparr.length-4? el.style.display= "none": el.style.display= "block"
        })
    }else {     
        document.querySelectorAll(".check button").forEach((el,indexx)=>{
            (indexx+2 > e && indexx-2 < e)? el.style.display= "block" : el.style.display= "none"
        })
    }
  }

  //////////////click CHANGE BUTTON PAGE/////////////
  function clickk(e){
    aii.forEach((item , i) => {
      if(e.target.id == i) {
        setInd(i) ;
        setArray(temparr[i])
      } ;
    });
    runtime(e.target.id);

    document.querySelectorAll(".check button").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }

///////////////BUTTON NEXT///////////////////
  function nexts(){
    let temp=0;
    runtime(index);
      if(index!==temparr.length-1){
        document.querySelectorAll(".check button").forEach((el) => {
            if(el.classList.contains("active")){
                el.classList.remove("active");
                temp++
            }else if(temp==1){
                el.classList.add("active");
                temp--;
            } 
          });
          setArray(temparr[index+1])
          setInd(index+1)
      };
  }


  /////////////////BUTTON PER////////////////////
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
        setArray(temparr[index-1])
      }
  }
//////////////////////////
  function filterDB() {  
    const item = DB.filter(function (arr) {
      if (arr.stt == "New") {
       return arr
      }
    });
    
    localStorage.setItem("new", JSON.stringify(item))
    settemparr(datak("new",item).arr)
    setArray(datak("new",item).arr[index])
  }

  function filterData(a, b) { 
    
    document.querySelectorAll(".check button").forEach((el,i) => {
      i!==0? el.classList.remove("active"): el.classList.add("active");
    }); 
    const item = DB.filter(function (arr) {
      if (arr.stt == a) {
       return arr
      }
    });
    runtime(0)
    localStorage.setItem(b, JSON.stringify(item))
    settemparr(datak(b,item).arr)
    setArray(datak(b,item).arr[0])
    setInd(0)
    console.log(index); 
  }
   function filterNew(){        
     setInd(0)
     filterData("New","new")
         
  }
   function filterDone(){
    setInd(0)
     filterData("Done","done")
   
  }
  function filterDoing (){
    setInd(0)
    filterData("Doing","doing")
  }
  function filterAll (){
    console.log(index);
     document.querySelectorAll(".check button").forEach((el,i) => {
      i!==index? el.classList.remove("active"): el.classList.add("active");
    }); 
    runtime(index)
    settemparr(props.arr)
    setArray(props.arr[index])
    setInd(0) 
    // setchange(!change)
  }
  ////////////////////////


  return (
    <div
      id="mainContent"
      style={{ display: "flex", minHeight: "100vh" }}
      className="wrap w-100"
    >
      <div className="sidebarList">
        <Sidebar handbal={filterAll}    title={"Task All"} />
        <Sidebar handbal={filterDone}   title={"Sort Done"} />
        <Sidebar handbal={filterDoing}  title={"Sort Doing"} />
        <Sidebar handbal={filterNew}    title={"Sort New"} />
      </div>
      <div className="main-layout" id="mainContent">

        <div id="list" className="w-100">
          {<Todolist eventt={settxt} data={mainArray} />}
        </div> 
        <div className="pagination mt-4  justify-content-center" style={{display : temparr.length <= 1 ? "none": "flex"}} >
            <button onClick={prer} id="pre" disabled={index==0 ? true : false}>Pre</button>
            <div className="check mx-auto">
                {                   
                temparr.map((arc, i) => (                    
                      <button onClick={clickk} key={i} className={i==0 ?"active":""} style={{display : i>2 ?"none":"block"}} id={i}> {i+1}   </button>                     
                ))
                }
             </div>
            <button onClick={nexts} id="next" disabled={index==temparr.length-1 ? true : false}>Next {index+1}/{temparr.length}</button>
        </div>
        
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
