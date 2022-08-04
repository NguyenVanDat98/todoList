import React   from "react";

import "./StyleHeader.scss";
import {Link} from 'react-router-dom';

const Header = (props) => { 

//  console.log(props.change);
  return (
    <div className="header  bg-primary justify-content-between">           
      <div className="home">                
         <Link to={props.change ?"/form" : "/" }> <button onClick={props.btn} type="button">{props.change ?  "CREATE ADD": "BACK"}</button>
         </Link>
      </div>
      <div className="search">
        <input type="search"  onKeyUp={props.search}  placeholder="Search"/>
        <button   >Search</button>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
