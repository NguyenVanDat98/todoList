import React, { useState } from "react";
import PropTypes from "prop-types";
import Todoitem from "./todoitem";

const Todolist = (props) => {


let data = props.data ? props.data : [];
console.log(data);
  return (
    <div className="main m-3 flex-wrap">
      {data.map((arr, i) => (
        <Todoitem
          iid={i}
          key={i}
          setevent={props.eventt}
          title={arr.title}
          status={arr.stt}
          dess={arr.mess}
          name={arr.name}
          txtBtn={arr.btn}
        />
      ))}
    </div>
  );
};

Todolist.propTypes = {};

export default Todolist;