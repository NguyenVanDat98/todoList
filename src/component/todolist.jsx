import React  from "react";
import Todoitem from "./todoitem";

const Todolist = ({data,select,eventt,onSelect,dataSelect,index }) => {
   
  return (
    
    <div id="listToDo"  className="main m-3 flex-wrap">
      {data && data.map(({id,title,stt,mess,name,btn}, i) => (
        <Todoitem
          id={id}
          key={i}
          Select={onSelect}
          select={dataSelect.includes(id)?true:false }
          setevent={eventt}
          title={title}
          stt={stt}
          mess={mess}
          name={name}
          btn={btn}
  
        />
      ))}
    </div>
  );
};


export default Todolist;
