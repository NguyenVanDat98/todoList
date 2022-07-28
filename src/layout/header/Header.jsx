import React, {  useEffect  } from "react";
import PropTypes from "prop-types";
import "./StyleHeader.css";
import FormHeader from "../../component/FormHeader";
import { useState } from "react";


const Header = (props) => {
  
    
 
  return (
    <div className="header  bg-primary justify-content-between">
      <FormHeader handle={props.btn}  sty={props.tus} val={props.reVal}/>
      <div className="home">
        <button onClick={props.btn} type="button">
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
