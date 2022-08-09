import React  from "react";
import Todoitem from "./todoitem";

const Todolist = ({data,select,eventt,onSelect,dataSelect}) => {
console.table(data);

  return (
    <div id="listToDo"  className="main m-3 flex-wrap">
      {data && data.map(({id,title,stt,mess,name,btn}, i) => (
        <Todoitem
          iid={id}
          key={i}
          Select={onSelect}
          select={dataSelect.includes(id)?true:false }
          setevent={eventt}
          title={title}
          status={stt}
          dess={mess}
          name={name}
          txtBtn={btn}
          index={i}
        />
      ))}
    </div>
  );
};


export default Todolist;
