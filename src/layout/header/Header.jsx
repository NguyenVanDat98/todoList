import React   from "react";

import "./StyleHeader.scss";
import {Link} from 'react-router-dom';

const Header = (props) => { 

  return (
    <div className="header  bg-primary justify-content-between">           
      <div className="home">                
         <Link to={props.change ?"/learn/form" : "/learn" }> <button onClick={props.btn} type="button">{props.change ?  "CREATE ADD": "BACK"}</button>
         </Link>
      </div>
      <div className="search">
        <input type="search" onChange={(e)=>props.search(e.target.value)}  placeholder="Search"/>
        <button   >Search</button>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
