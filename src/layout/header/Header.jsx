import React   from "react";

import "./StyleHeader.scss";
import {Link} from 'react-router-dom';
import storeState from "../../store/storeState";
import { observer } from "mobx-react"


const Header = (props) => { 

  return (
    <div className="header  bg-primary justify-content-between">           
      <div className="home">                
         <Link to={props.change ?"/learn/form" : "/learn" }> <button onClick={props.btn} type="button">{props.change ?  "CREATE ADD": "BACK"}</button>
         </Link>
      </div>
      <div className="search">
        <input type="search" onChange={(e)=>props.search(e.target.value)}  placeholder={storeState.secondsPassed}/>
        <button   >Search</button>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default observer(Header);
