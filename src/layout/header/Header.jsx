

import React from "react";
import PropTypes from "prop-types";
import "./StyleHeader.css";
import FormHeader from "../../component/FormHeader";
import { useState } from "react";


const Header = (props) => {
    const [tus, settus] = useState("none");
    const [change, setchange] = useState(true);

const itemdata = localStorage.getItem("dataa")? JSON.parse(localStorage.getItem("dataa")):[];
const data = itemdata?[...itemdata]:[];

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

  function btn() {
    if (tus === "none") {
      settus("block");
      document.getElementById("mainContent").style.display = "none";
    } else {
      settus("none");
      document.getElementById("mainContent").style.display = "flex";
    }
  }

  return (
    <div className="header  bg-primary justify-content-between">
      <FormHeader handle={create} sty={tus} />
      <div className="home">
        <button onClick={btn} type="button">
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
