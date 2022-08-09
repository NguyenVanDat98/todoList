import React, { useState } from "react";
import PropTypes from "prop-types";

function Todoitem(props) {
  const { title, name, dess,setevent,Select,select, status ,txtBtn,iid } = props;

  return (
    <div className={`taskItem mx-2 my-2 px-2 py-2 ${select? "selectItem":""}`} onClick={()=>{Select && Select(iid)}}>
      <label>
        Title : <a> {title}</a>
      </label>
      <br></br>
      <label>        
        Creator : <a>{name} </a>
      </label>
      <br></br>
      <label>        
        <b className={status}>Status:{status} </b>
      </label>
      <br></br>
      <div>        
        Desscription:
        <p>{dess}</p>
      </div>
      <button className={ ` ${status.toLowerCase()}`}  onClick={()=>!Select&& setevent(iid)}>
        {txtBtn}
      </button>
    </div>
  );
}

Todoitem.propTypes = {};
Todoitem.defaultProps = {
  tit: "title 1",
  name: "name",
  dess: "messs",

};
export default Todoitem;
