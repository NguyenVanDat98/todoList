import React, {  useEffect  } from "react";
import PropTypes from "prop-types";
import "./StyleHeader.css";
import FormHeader from "../../component/FormHeader";
import { useState } from "react";


const Header = (props) => {
  
    const [tus, settus] = useState("none");


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
      <FormHeader handle={props.create} sty={tus} />
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
