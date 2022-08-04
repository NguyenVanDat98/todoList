import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../component/sidebar";
import "../style.css";
import Todolist from "../../component/todolist";
import { add, datak, runtime } from "../../common/common";


const Main = (props) => {
  const [change, setchange] = useState(true);
  const [index, setInd] = useState(0);

  let {dataTask:DB,arr:arr} = datak("dataa",add())
    DB.map((element,indexs)=>{
      element.index = indexs
      element.btn = element.stt == "New" ? "Start" : element.stt == "Doing" ? "Done" : "Renew";  
    })

  const [temparr, settemparr] = useState(arr); 
  // const [mainArray, setArray] = useState(temparr[index]); 


//data sẽ được set lại khi data từ app được làm mới
  useEffect(()=>{
    const dataArr = props.data.arr
    dataArr.map((a,i)=>{
      a.map((ai,index)=>{
       ai.btn = ai.stt == "New" ? "Start" : ai.stt == "Doing" ? "Done" : "Renew";  
      })
    })
     settemparr(dataArr)
     setInd(0)
    //  setArray(dataArr[0])
  },[props.data.dataTask])
  //duyệt DB và tạo thêm propertie .btn cho chính nó
  
///////change status data item/////
  function settxt(e) {   
    temparr[index].map((a, i) => {
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
          //duyệt lại phần từ của DataBase rồi tìm index của phần tử bị change thay thế nó và set lên local
          DB.map((ai,index)=>{
            a.index==index? DB.splice(index,1,a ):console.log("");
            
          }) 
          localStorage.setItem("dataa",JSON.stringify(DB))  
          setchange(!change);
        
        }
      });
  
  }
 // hàm này có tác dụng chia bố cục pagination
  

  //////////////click CHANGE BUTTON PAGE/////////////
  function clickk(e){
    arr.forEach((item , i) => {
      if(e.target.id == i) {
        setInd(i) ;
      } ;
    });
    runtime(e.target.id, temparr);
    document.querySelectorAll(".check button").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }

///////////////BUTTON NEXT///////////////////
  function nexts(){
    let temp=0;
    runtime(index, temparr);
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
          // setArray(temparr[index+1])
          setInd(index+1)
      };
  }

  /////////////////BUTTON PER////////////////////
  function prer() {
    let temp = 0;
    let cont;
    runtime(index, temparr);
      if(index!==0){
        document.querySelectorAll(".check button").forEach((el,i) => {
                if(el.classList.contains("active")){
                    el.classList.remove("active");
                    temp++;
                    cont = i-1;
                }
            })
          document.querySelectorAll(".check button").forEach((el,i) => {  
            if (cont==i) {
                el.classList.add("active")
            }
            });
        setInd(index-1);
      }
  }
//////////////////////////
 

  function filterData(a) { 
    
    document.querySelectorAll(".check button").forEach((el,i) => {
      i!==0? el.classList.remove("active"): el.classList.add("active");
    }); 
    const item = DB.filter(function (arr,i) {
      if (arr.stt == a) {return arr
      }
    });
    runtime(0,temparr)
    localStorage.setItem(a, JSON.stringify(item))
    settemparr(datak(a,item).arr) 
    setInd(0)

  }
   function filterNew(){            
     filterData("New")         
  }
   function filterDone(){  
     filterData("Done")   
  }
  function filterDoing (){
    filterData("Doing")
  }
  function filterAll (){
    document.querySelectorAll(".check button").forEach((el,i) => {
      i!==0? el.classList.remove("active"): el.classList.add("active");
    }); 
    runtime(0, temparr)
    settemparr(arr)
    setInd(0) 

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
          {<Todolist eventt={settxt} data={temparr[index]} />}
        </div> 
        <div className="pagination mt-4  justify-content-center" style={{display : temparr.length <= 1 ? "none": "flex"}} >
            <button onClick={prer} id="pre" disabled={index==0 ? true : false}>Pre</button>
            <div className="check mx-auto">
                {                   
                temparr.map((arc, i) =>                
                      <button onClick={clickk} key={i} className={i==0 ?"active":""} style={{display : i>2 ?"none":"block"}} id={i}> {i+1}   </button>                     
                )
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
