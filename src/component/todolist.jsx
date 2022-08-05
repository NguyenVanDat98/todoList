import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Todoitem from "./todoitem";

const Todolist = (props) => {
  
  let data = props.data ? props.data : [];

  return (
    <div id="listToDo"  className="main m-3 flex-wrap">
      {data.map((arr, i) => (
        <Todoitem
          iid={i}
          key={i}
          select={props.select}
          setevent={props.eventt}
          title={arr.title}
          status={arr.stt}
          dess={arr.mess}
          name={arr.name}
          txtBtn={arr.btn}
          index={props.index}
        />
      ))}
    </div>
  );
};

Todolist.propTypes = {};

export default Todolist;
