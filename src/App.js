import React, { useState } from "react";
import Header from "./layout/header/Header";
import Main from "./layout/main/main";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import Todoitem from "./component/todoitem";
import { add, datak } from "./common/common";

const App = (props) => {
  const [change, setchange] = useState(true);  
  const { dataTask:DB } = datak("dataa", add())
  DB.map((element,i)=>{
    element.index=i
     element.btn = element.stt == "New" ? "Start" : element.stt == "Doing" ? "Done" : "Renew";  
})


  const [data, setData] = useState(datak("dataa", DB));
  function btn() {
    setchange(!change);
    setData(datak("dataa", DB));
  }

  function search(e) {
    let valuee = e.target.value.toLowerCase().trim();
    let temp = DB.filter((element) => {
      let isValid =
        element.title.toLowerCase().includes(valuee) ||
        element.name.toLowerCase().includes(valuee) ||
        element.mess.toLowerCase().includes(valuee) ||
        element.stt.toLowerCase().includes(valuee);
      if (isValid) {
        return element;
      }
    });
    setData(datak("tempSearch", temp));
  }

  return (
    <div className="App">
      <Header search={search} btn={btn} change={change} />
      <Routes>
        <Route
          path="/learn/"
          element={<Main btn={btn} data={data} />}
        ></Route>
        <Route path="/learn/form" element={<Form handle={btn} />} />
        {DB.map((element, index) => 
          <Route key={index}
            path={`/learn/${index+1}`}
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
        )}
      </Routes>
    </div>
  );
};

export default App;
