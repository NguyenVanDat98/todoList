import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";


// 
function Todoitem(props) {
  const { title, name, dess,setevent , status } = props;
 const [colorr, setcolor] = useState("#04BE00");
  const [txt, settext] = useState("Change"); 

  return (
    <div className="taskItem mx-2 my-2 px-2 py-2">
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
      <button id={props.iid}  className="btn-primary" onClick={setevent}>
        {txt}
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
