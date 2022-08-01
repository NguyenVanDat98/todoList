import React  from "react";

import "./StyleHeader.css";
import Form from "../../component/Form";
import {Link} from 'react-router-dom';



const Header = (props) => {    
//  console.log(props.change);
  return (
    <div className="header  bg-primary justify-content-between">      
       <Form handle={props.btn}  sty={props.tus} val={props.reVal}/>  
      <div className="home">        
        
         <Link to={props.change?"/form" :"/main" }> <button onClick={props.btn} type="button">{props.change ? "CREATE ADD" : "BACK" }</button>
         </Link>
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
