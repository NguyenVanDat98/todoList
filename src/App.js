import React, { useEffect, useState } from "react";
import Header from "./layout/header/Header";
import Main from "./layout/main/main";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import Todoitem from "./component/todoitem";
import { add, datak, makeId } from "./common/common";

const App = (props) => {
  const [change, setchange] = useState(true);
  const {dataTask: DataApp} = datak("dataa", add());
  const [data, setData] = useState(datak("dataa", add()));
// console.log(DataApp.dataTask.length);
  useEffect(() => {
    
      DataApp.map((element, i) => {
        if(!element.hasOwnProperty("id")){
            element.id = makeId(12);
        }       
        element.btn =
          element.stt == "New"
            ? "Start"
            : element.stt == "Doing"
            ? "Done"
            : "Renew";
      });
    localStorage.setItem("dataa", JSON.stringify(DataApp));
    setData(datak("dataa", DataApp));
  },[]);

  function btn() {
    setchange(!change);
    setData(datak("dataa", DataApp));    
  }
  function btnn(){
    setData(datak("dataa", DataApp));
  }

  function search(e) {
    let valuee = e.target.value.toLowerCase().trim();
    console.log( datak("dataa",DataApp).dataTask);
    let temp = datak("dataa",DataApp).dataTask.filter((element) => {
      let isValid =
        element.title.toLowerCase().includes(valuee) ||
        element.name.toLowerCase().includes(valuee) ||
        element.mess.toLowerCase().includes(valuee) ||
        element.stt.toLowerCase().includes(valuee);
      if (isValid) {
        return element;
      }
    });console.log(temp);
    setData(datak("tempSearch",temp));
  }

  return (
    <div className="App">
      <Header search={search} btn={btn} change={change} />
      <Routes>
        <Route path="/learn/" element={<Main btn={btnn} data={data} />}></Route>
        <Route path="/learn/form" element={<Form handle={btn} />} />
        {DataApp.map((element, index) => (
          <Route
            key={index}
            path={`/learn/${index + 1}`}
            element={
              <Todoitem
                title={element.title}
                name={element.name}
                dess={element.mess}
                status={element.stt}
                txtBtn={
                  (element.btn =
                    element.stt == "New"
                      ? "Start"
                      : element.stt == "Doing"
                      ? "Done"
                      : "Renew")
                }
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
