import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./StyleHeader.css";
import FormHeader from "../../component/FormHeader";
import { useState } from "react";




const Header = (props) => {
    const [change, setchange] = useState(props.render);
    useEffect(()=>{

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
