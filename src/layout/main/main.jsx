import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../component/sidebar";
import "../style.css";
import Todolist from "../../component/todolist";
import { add, datak } from "../../common/common";


const Main = (props) => {
  // const [change, setchange] = useState(true);
  const [selectItem, setSelect] = useState(false);
  const [selectLength, setSelectLength] = useState(0);
  const [check, setCheck] = useState([]);
  const [index, setInd] = useState(0);
  const [temparr, settemparr] = useState(props.data.arr);

  let { dataTask: DB, arr: arr } = datak("dataa", add());
console.table(props.data.dataTask,["id"]);

  useEffect(() => {
    props.data && props.data.dataTask.map((element, indexs) => {
      element.btn =element.stt == "New" ? "Start": element.stt == "Doing"? "Done": "Renew";
    });
    settemparr(props.data.arr)
  }, [props.data.arr]);
 
  function Select(e){
    const arrChecked = check;
    let indexChecked = e ;
    if (arrChecked.includes(indexChecked)) {
      arrChecked.forEach((a, i) => {
        a === indexChecked && arrChecked.splice(i, 1);
      });
    } else {
      arrChecked.push(indexChecked);
    }
    setSelectLength(arrChecked.length)
    setCheck(arrChecked);  
    console.table(arrChecked);      
  }

  function BackSelect() {
    let trash = datak("trash", []).arr;
    settemparr(datak("trash", []).arr);
    setCheck([]);
    setSelect(!selectItem);
  }

  function deleteSelect(){
    console.log("delete", check);
    let thumnalDelete=[]
    let thumnaltrash=[]   
    DB.forEach((arr,i)=>{
       let isvalid = check.includes(arr.id)
       !isvalid ? thumnalDelete.push( arr):thumnaltrash.push(arr) ;
    })
    localStorage.setItem("dataa", JSON.stringify(thumnalDelete));
    localStorage.setItem("trash", JSON.stringify(thumnaltrash));
    settemparr(datak("dataa", add()).arr);

    setSelect(!selectItem);
    setCheck([]);
    props.btn();
  };

 
  ///////change status data item/////
  function settxt(e) {
      arr[index].map((a, i) => {
      if (a.id == e) { 
            switch (a.stt) {
              case "New":
                a.stt = "Doing";
                a.btn = "Done";
                break;
              case "Doing":
                a.stt = "Done";
                a.btn = "Renew";
                break;
              case "Done":
                a.stt = "New";
                a.btn = "Doing";
                break;            
              
            }}
        localStorage.setItem("dataa", JSON.stringify(DB));
        settemparr(arr)      
    });
  }
  function filterData(a) {
    const item = DB.filter(function (arr, i) {
      if (arr.stt == a) {
        return arr;
      }
    });   
    settemparr(datak(a, item).arr);
    setInd(0);
  }
  return (
    <div
      id="mainContent"
      style={{ display: "flex", minHeight: "100vh" }}
      className="wrap w-100"
    >
      <div className="sidebarList">
        <Sidebar handbal={()=>settemparr(arr)} title={"Task All"} />
        <Sidebar handbal={()=>filterData("Done")} title={"Sort Done"} />
        <Sidebar handbal={()=>filterData("Doing")} title={"Sort Doing"} />
        <Sidebar handbal={()=>filterData("New")} title={"Sort New"} />
        <Sidebar
          handbal={() => setSelect(!selectItem)}
          clazz={`${selectItem}`}
          title={`Select ${selectItem ? "On" : ""}`}
        />
        <p
          style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}
        >
          {check.length==0 ? "" : `Select : ${check.length}`}
        </p>
        <div
          style={{ display: selectItem ? "flex" : "none" }}
          className="listButton"
        >
          <button onClick={deleteSelect}>Detele</button>
          <button onClick={BackSelect}>Old Step</button>
          <button>Trash</button>
        </div>
      </div>
      <div className="main-layout" id="mainContent">
        <div id="list" className="w-100">
          {
            <Todolist
             onSelect={selectItem==true && Select}
              eventt={settxt}
              dataSelect={check}
              select={selectItem}
              index={index}
              data={temparr[index]}
            />
          }
        </div>
        <div
          className="pagination mt-4  justify-content-center"
          style={{ display: temparr.length <= 1 ? "none" : "flex" }}
        >
          <button onClick={()=>{setInd(index-1)}} id="pre" disabled={index == 0 ? true : false}>
            Pre
          </button>
          <div className="check mx-auto">
            {temparr.map((arc, i) => (
              <button
                onClick={()=>{setInd(i); console.log(i);}}
                key={i}
                className={ i ==index ? "active" : ""}
                style={{ display: index<1?i<=2?"block":"none": index==arr.length-1? i<=arr.length-4 ?"none":"block":i+2>index && i-2<index?"block":"none" }}
                id={i}
              >        
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={()=>{setInd(index+1);}}
            id="next" 
            disabled={index == temparr.length - 1 ? true : false}
          >
            Next {index + 1}/{temparr.length}
          </button>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
