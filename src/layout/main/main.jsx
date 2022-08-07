import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../component/sidebar";
import "../style.css";
import Todolist from "../../component/todolist";
import { add, datak, runtime } from "../../common/common";

const Main = (props) => {
  const [change, setchange] = useState(true);
  const [selectItem, setSelect] = useState(false);
  const [selectLength, setSelectLength] = useState(0);
  const [check, setCheck] = useState([]);
  const [index, setInd] = useState(0);

  let { dataTask: DB, arr: arr } = datak("dataa",add());
  useEffect(() => {
    props.data.dataTask.map((element, indexs) => {
      element.index = indexs;
      element.btn =
        element.stt == "New"
          ? "Start"
          : element.stt == "Doing"
          ? "Done"
          : "Renew";
    });
    // localStorage.setItem("dataa", JSON.stringify(props.data.dataTask));
  }, [datak("dataa",add())])
  console.log(props.data);
  useEffect(()=>{
     
    props.data.dataTask.map((element,indexs)=>{
      element.index = indexs;
    })
    settemparr(props.data.arr)
  },[props.data])

  const [temparr, settemparr] = useState(props.data.arr);
  useEffect(() => {
    document.querySelectorAll(".taskItem").forEach((element, i) => {
      check.includes(element.id)
        ? (element.style.backgroundColor = "rgba(233, 215, 17, 0.878)")
        : (element.style.backgroundColor = "white");
    });
  }, [index || change]);
  ////////////////////test/////////////////////////
  useEffect(()=>{         
    let arrChecked=check;  
    const handleClick=(e)=>{       
      console.dir(e.target); 
      let indexChecked = e.target.hasAttribute("id") ? e.target.id : null;
     if(indexChecked==null||indexChecked=="listToDo"||e.target.type=="submit" ){
          return;
      }else{
      let ee=document.getElementById(`${indexChecked}`)     
      if (arrChecked.includes(indexChecked)) {
        ee.style.backgroundColor = "white";
        arrChecked.forEach((a,i)=>{
          if(a===indexChecked)
          arrChecked.splice(i,1)
        })           
      }else{
        ee.style.backgroundColor = "rgba(233, 215, 17, 0.878)";
        arrChecked.push(indexChecked);      
      }
      setSelectLength(arrChecked.length)
      setCheck(arrChecked)  
      }     
    }
  if(selectItem){  
    console.log("mouseting");
    document.querySelector("#listToDo").addEventListener("click",handleClick)
  }
    
         return ()=>{
      console.log("unmo");
      console.log(selectItem); 

      if(selectItem){
       document.querySelector("#listToDo").removeEventListener("click",handleClick)
      }
  }
  },[selectItem])
console.log(selectItem);

  // useEffect(() => {
  //   let arrChecked = check;
  //   const handleClick = (e) => {
  //     console.log(selectItem);
  //   //   console.log(e.target.id);
  //   //   let indexChecked = e.target.hasAttribute("id") ? e.target.id : null;
  //   //   if (indexChecked == null || indexChecked == "listToDo") {
  //   //     return;
  //   //   } else {
  //   //     let ee = document.getElementById(`${indexChecked}`);
  //   //     if (arrChecked.includes(indexChecked)) {
  //   //       ee.style.backgroundColor = "white";
  //   //       arrChecked.forEach((a, i) => {
  //   //         if (a == indexChecked) arrChecked.splice(i, 1);
  //   //       });
  //   //     } else {
  //   //       ee.style.backgroundColor = "rgba(233, 215, 17, 0.878)";
  //   //       arrChecked.push(indexChecked);
  //   //     }       
  //     }      
  //   // };
  //   //     setSelectLength(arrChecked.length);
  //   //     setCheck(arrChecked);
  //   if (selectItem) {
  //     console.log("mouseting");
  //     document
  //       .querySelector("#listToDo")
  //       .addEventListener("click", handleClick);
  //     }

  //   return () => {
  //     if (!selectItem) {
  //       console.log("unmo");
  //       document
  //         .querySelector("#listToDo")
  //         .removeEventListener("click", handleClick);
  //     }
  //   };
  // }, [selectItem]);

  function BackSelect() {
    let trash = datak("trash", []).arr;
    settemparr(datak("trash", []).arr);
    setSelectLength(0);
    setCheck([]);
    setSelect(!selectItem);
    console.table(trash);
  }

  const deleteSelect = () => {
    console.log("delete",check);
    let thumnalDelete = DB.filter((a) => {
      let isvalid = check.includes(a.id);
      return !isvalid ? a : false;
    });
    let thumnaltrash = DB.filter((a) => {
      let isvalid = check.includes(a.id);
      return isvalid ? a : false;
    });
    console.log(thumnalDelete);
    localStorage.setItem("dataa", JSON.stringify(thumnalDelete));
    localStorage.setItem("trash", JSON.stringify(thumnaltrash));
    settemparr(datak("dataa", add()).arr);

    setSelect(!selectItem);
    setCheck([]);
    setSelectLength(0);
    setchange(!change);
    props.btn();
  };

  ///////change status data item/////
  function settxt(e) {
    console.log(e.target.id);
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
        DB.map((ai, index) => {
          a.index == index ? DB.splice(index, 1, a) : console.log();
        });
        localStorage.setItem("dataa", JSON.stringify(DB));
        setchange(!change);
      }
    });
  }
  // hàm này có tác dụng chia bố cục pagination

  //////////////click CHANGE BUTTON PAGE/////////////
  function clickk(e) {
    arr.forEach((item, i) => {
      if (e.target.id == i) {
        setInd(i);
      }
    });
    runtime(e.target.id, temparr);
    document.querySelectorAll(".check button").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  ///////////////BUTTON NEXT///////////////////
  function nexts() {
    let temp = 0;

    runtime(index, temparr);
    if (index !== temparr.length - 1) {
      document.querySelectorAll(".check button").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          temp++;
        } else if (temp == 1) {
          el.classList.add("active");
          temp--;
        }
      });
      // setArray(temparr[index+1])
      setInd(index + 1);
    }
  }

  /////////////////BUTTON PER////////////////////
  function prer() {
    let temp = 0;
    let cont;
    runtime(index, temparr);
    console.log(check);
    document.querySelectorAll(".taskItem").forEach((element, i) => {
      check.forEach((el, ii) => {
        check.includes(element.id)
          ? (element.style.backgroundColor = "rgba(31, 82, 129, 0.205)")
          : (element.style.backgroundColor = "white");
      });
    });
    if (index !== 0) {
      document.querySelectorAll(".check button").forEach((el, i) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          temp++;
          cont = i - 1;
        }
      });
      document.querySelectorAll(".check button").forEach((el, i) => {
        if (cont == i) {
          el.classList.add("active");
        }
      });
      setInd(index - 1);
    }
  }
  //////////////////////////

  function filterData(a) {
    document.querySelectorAll(".check button").forEach((el, i) => {
      i !== 0 ? el.classList.remove("active") : el.classList.add("active");
    });
    const item = DB.filter(function (arr, i) {
      if (arr.stt == a) {
        return arr;
      }
    });
    runtime(0, temparr);
    localStorage.setItem(a, JSON.stringify(item));
    settemparr(datak(a, item).arr);
    setInd(0);
  }
  function filterNew() {
    filterData("New");
  }
  function filterDone() {
    filterData("Done");
  }
  function filterDoing() {
    filterData("Doing");
  }
  function filterAll() {
    document.querySelectorAll(".check button").forEach((el, i) => {
      i !== 0 ? el.classList.remove("active") : el.classList.add("active");
    });
    runtime(0, temparr);
    settemparr(arr);
    setInd(0);
  }
  ////////////////////////

  return (
    <div
      id="mainContent"
      style={{ display: "flex", minHeight: "100vh" }}
      className="wrap w-100"
    >
      <div className="sidebarList">
        <Sidebar handbal={filterAll} title={"Task All"} />
        <Sidebar handbal={filterDone} title={"Sort Done"} />
        <Sidebar handbal={filterDoing} title={"Sort Doing"} />
        <Sidebar handbal={filterNew} title={"Sort New"} />
        <Sidebar
          handbal={() => setSelect(!selectItem)}
          clazz={`${selectItem}`}
          title={`Select ${selectItem ? "On" : ""}`}
        />
        <div
          style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}
        >
          {selectLength == 0 ? "" : `Select : ${selectLength}`}
        </div>
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
              eventt={settxt}
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
          <button onClick={prer} id="pre" disabled={index == 0 ? true : false}>
            Pre
          </button>
          <div className="check mx-auto">
            {temparr.map((arc, i) => (
              <button
                onClick={clickk}
                key={i}
                className={i == 0 ? "active" : ""}
                style={{ display: i > 2 ? "none" : "block" }}
                id={i}
              >
                {" "}
                {i + 1}{" "}
              </button>
            ))}
          </div>
          <button
            onClick={nexts}
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
