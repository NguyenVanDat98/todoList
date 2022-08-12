import React, { useCallback, useEffect, useMemo, useState } from "react"
import Sidebar from "../../component/sidebar";
import "../style.css";
import Todolist from "../../component/todolist";
import { datak, fakeData, URL } from "../../common/common";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";



const Main = (props) => {
  const [selectItem, setSelect] = useState(false);
  const [change , set ]=useState(true);
  const [selectLength, setSelectLength] = useState(0);
  const [check, setCheck] = useState([]);
  const [index, setInd] = useState(0);
  const [temparr, settemparr] = useState(props.data.arr);
  let { dataTask: DB, arr: arr } = props.data;
  useEffect(() => {
    if(props.data){

    props.data && props.data.dataTask.map((element, indexs) => {
      element.btn =element.stt == "New" ? "Start": element.stt == "Doing"? "Done": "Renew";
    });
    setInd(0)
    settemparr(props.data.arr)
    }
    
  }, [props.data]);

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
   
    setSelect(!selectItem)
    setSelectLength(arrChecked.length)
    setCheck(arrChecked);  
    console.table(arrChecked);      
  }

  function BackSelect() {
    let trash = datak("trash", []).arr;
    settemparr(fakeData([]).arr);
    setCheck([]);
    setSelect(!selectItem);
  }

const taost = () => toast('Delete item Success!', {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  })
  function deleteSelect(){

    console.log("delete", check);
    let thumnalDelete=[]
    let thumnaltrash=[]   
    DB.forEach((arr,i)=>{

       let isvalid = check.includes(arr.id)
       if(isvalid) {
        fetch(`${URL}/${arr.id}`,{method:"DELETE"}).then(res=>res.json()).then(re=>{console.log(re,"asd")})
        fetch(URL).then(res=>res.json()).then(re=>console.log(re))
       } 
    })
    setSelect(!selectItem);
    setCheck([]);
    props.btn();
    taost()
  };

 
  ///////change status data item/////
  function settxt(e) {

    function checkStatus(a){
      switch (a) {
          case "New":
          return   "Doing";                
          case "Doing":
          return "Done";                  
          case "Done":
            return "New";  
    }
    }
    function checkBtn(a){
      switch (a) {
          case "Start":
          return "Done";                
          case "Done":
          return "Renew";                  
          case "Renew":
          return "Start";  
      
    }
    }
fetch(`${URL}/${e.id}`,{
  method:"PUT",
  headers: {
    Accept : "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({...e, stt: checkStatus(e.stt), btn: checkBtn(e.btn) })
}).then(res=>res.json())
.then(()=>{
  const updatedTaskList = DB.map((obj) => {
  
  if (obj.id === e.id) {
    obj.stt = checkStatus(e.stt);
    obj.btn = checkBtn(e.btn);
    return obj;
  }
  return obj;
});

settemparr(fakeData(updatedTaskList).arr)})

.catch(err=>console.log("Error : ",JSON.stringify(err)))

  }
  function filterData(a) {
    const item = DB.filter(function (arr, i) {
      if (arr.stt == a) {
        return arr;
      }
    });   
    settemparr(fakeData(item).arr);
    setInd(0);
  }

  window.addEventListener("keyup", (event)=> (event.key=="Shift"&&setSelect(true)))


  return (

    <div
      id="mainContent"
      style={{ display: "flex", minHeight: "100vh" }}
      className="wrap w-100"
      >
    
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        >      
        </ToastContainer > 
      
       
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
          <button onClick={()=>{check && deleteSelect()}}>Detele</button>
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
          <button
            onClick={()=>{setInd(0);}}
            disabled={index == 0 ? true : false}
            style={{display: index < 2 ? "none" : "block", backgroundColor: "#333"}}
            >
            {1}
          </button>
            {temparr.map((arc, i) => (
              <button
                onClick={()=>{setInd(i)}}
                key={i}
                className={ i ==index ? "active" : ""}
                style={{ display: index<1?i<=2?"block":"none": index==arr.length-1? i<=arr.length-4 ?"none":"block":i+2>index && i-2<index?"block":"none" }}
                id={i}
              >        
                {i + 1}
              </button>
            ))
            }
            <button
            onClick={()=>{setInd(temparr.length-1);}}
            disabled={index == temparr.length - 1 ? true : false}
            style={{display: index+2 >= temparr.length ? "none" : "block", backgroundColor: "#333"}}
            >
            {temparr.length}
          </button>
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
