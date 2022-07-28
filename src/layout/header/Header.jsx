<<<<<<< HEAD


import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> b09e935aa0be98162061e62fe56a4ca011422c7c
import PropTypes from "prop-types";
import "./StyleHeader.css";
import FormHeader from "../../component/FormHeader";
import { useState } from "react";
<<<<<<< HEAD


const Header = (props) => {
    const [tus, settus] = useState("none");
    const [change, setchange] = useState(true);
=======
>>>>>>> b09e935aa0be98162061e62fe56a4ca011422c7c


<<<<<<< HEAD
function DataItem(title, name, desscription) {
    this.title = title;
    this.name = name;
    this.stt = "New";
    this.mess = desscription;
  }    
console.log(data);
  const create = () => {
    
    let a =0;
    document.querySelectorAll(".formHeader input").forEach((e) => {
      if (e.value == "") {
          console.log(a);
        return a++;
      }
    })
    if (a > 0) {
      alert("trong");
    } else {
      const titleVal = document.getElementById("title").value;
      const creatoreVal = document.getElementById("creator").value;
      const desscriptionVal = document.getElementById("desscription").value;
      const item= new DataItem(titleVal, creatoreVal, desscriptionVal);
       data.push(item)
       console.log(data);
      localStorage.setItem("dataa", JSON.stringify(data));
      document.getElementById("title").value = "";
      document.getElementById("creator").value = "";
      document.getElementById("desscription").value = "";
      setchange(!change)
      btn();
    }
  };
=======


const Header = (props) => {
    const [change, setchange] = useState(props.render);
    useEffect(()=>{
>>>>>>> b09e935aa0be98162061e62fe56a4ca011422c7c

      setchange(!props.render) 
      console.log(props.render);
    },[change])

  return (
    <div className="header  bg-primary justify-content-between">
      <FormHeader handle={props.eventt} sty={props.tus} />
      <div className="home">
        <button onClick={props.btns} type="button">
          CREATE TODOITEM
        </button>
      </div>
      <div className="search">
        <input type="search" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
