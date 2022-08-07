import React from "react";
import PropTypes from "prop-types";

function Todoitem(props) {
  const { title, name, dess,setevent, status ,txtBtn } = props;

  return (
    <div className={`taskItem mx-2 my-2 px-2 py-2 ${props.select? "selectItem":""}`} id={props.iid }>
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
      <button id={props.index}  className={ ` ${status.toLowerCase()}`}  onClick={setevent}>
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
