import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../component/sidebar";
import "../style.css";
import Todolist from "../../component/todolist";
import { datak } from "../../run";
import add from "../../data";


const Main = (props) => {
  const [change, setchange] = useState(true); 
  const [Filter, setFil] = useState(false); 
   
  let DB = datak("dataa",add()).dataTask
  let arr = datak("dataa",add()).arr
  let aii = datak("dataa",add()).aii
 
  const [index, setInd] = useState(0);
  const [temparr, settemparr] = useState(arr);  
  const [ mainArray ,setArray] = useState(temparr[index])
  
  console.log(arr);
  // console.log(arr[index]);
  // kiểm tra mảng đang dc chọn có phần tử ko, duyệt các phần tử và thêm vào propertie btn cho mảng theo điều kiện
  (mainArray || []).map((e, i) => {
    e.btn = e.stt == "New" ? "Start" : e.stt == "Doing" ? "Done" : "Renew";
    // console.log(e);
  
    });
  
   //data sẽ được set lại khi data từ app được làm mới
  useEffect(()=>{
     settemparr(props.arr)
     setArray(temparr[index])
     console.log("DB",DB);

  },[props.data])
  
///////change status data item/////
  function settxt(e) {
   
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
          //duyệt lại phần từ của DataBase rồi tìm index của phần tử bị change thay thế nó và set lên local
          DB.map((ai,index)=>{
            if(a.index==index){ 
              console.log(ai);
              console.log(a);
              DB.splice(index,1,a )
            }
          }) 
          localStorage.setItem("dataa",JSON.stringify(DB))  
          setchange(!change);

        }
      });
  
  }
 // hàm này có tác dụng chia bố cục pagination
  function runtime(e){
    if (e<1){        //nếu trang đứng có index nhỏ hơn 1 thì nó sẽ ẩn đi các button có index<=2 
       document.querySelectorAll(".check button").forEach((el,indexx)=>{
            indexx<=2? el.style.display= "block": el.style.display= "none"
       })
    }else if (e == temparr.length-1 ){   // nếu index đến giới hạn lớn nhất thì ẩn tất các button trừ 3 nút cuối gần cuối cùng
        document.querySelectorAll(".check button").forEach((el,indexx)=>{
            indexx<=temparr.length-4? el.style.display= "none": el.style.display= "block"
        })
    }else {     // các trường hợp còn lại của active button thì nó chỉ hiện nút button có index nhỏ hơn 1 đơn vị và button lớn hơn 1 đơn vị 
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
        setArray(temparr[index-1])
      }
  }
//////////////////////////
 

  function filterData(a, b) { 
    setFil(true)
    document.querySelectorAll(".check button").forEach((el,i) => {
      i!==0? el.classList.remove("active"): el.classList.add("active");
    }); 
    const item = DB.filter(function (arr,i) {
      if (arr.stt == a) {
        console.log(i);
        arr.index=i
        // console.log(arr);
       return arr
      }
    });
    runtime(0)
    localStorage.setItem(b, JSON.stringify(item))
    settemparr(datak(b,item).arr)
    setArray(datak(b,item).arr[0])
    setInd(0)
    // console.log(index); 
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
    setFil(false)
     document.querySelectorAll(".check button").forEach((el,i) => {
      i!==index? el.classList.remove("active"): el.classList.add("active");
    }); 
    runtime(index)
    settemparr(arr)
    setArray(arr[index])
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
