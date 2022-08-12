import React, { useState } from "react";
import PropTypes from "prop-types";

function Todoitem(props) {
  const { title, name, mess,setevent,Select,select, stt ,btn,id } = props;

  return (
    <div className={`taskItem mx-2 my-2 px-2 py-2 ${select? "selectItem":""}`} onClick={()=>{Select && Select(id)}}>
      <label>
        Title : <a> {title}</a>
      </label>
      <br></br>
      <label>        
        Creator : <a>{name} </a>
      </label>
      <br></br>
      <label>        
        <b className={stt}>Stt:{stt} </b>
      </label>
      <br></br>
      <div>        
        Desscription:
        <p>{mess}</p>
      </div>
      <button className={ `${ stt && stt.toLowerCase()}`}  onClick={()=>!Select&& setevent({id,stt,title,name,mess,btn})}>
        {btn}
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
