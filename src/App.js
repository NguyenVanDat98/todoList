import React, { useEffect, useState } from "react";
import Header from "./layout/header/Header";
import Main from "./layout/main/main";

import "./App.css";
import add from "./data";
import { datak } from "./run";
import { Routes, Route } from "react-router-dom";
import Form from "./component/Form";


const App = (props) => {
  const [change, setchange] = useState(true);
  const [data, setData] = useState(datak("dataa", add()));
  const [tus, settus] = useState("none");
  
  function btn() {
    setchange(!change);
    setData(datak("dataa", add()));
  }
  function search(e) {
    let valuee = e.target.value.toLowerCase().trim()
    console.log(valuee);
    let temp = (datak("dataa", add()).dataTask).filter((element) => {
      let isValid =
        element.title.toLowerCase().includes(valuee)||
        element.name.toLowerCase().includes(valuee)||
        element.mess.toLowerCase().includes(valuee)||
        element.stt.toLowerCase().includes(valuee);
      if (isValid) { return element;
      }
    });
    setData(datak("tempSearch", temp));
  }

  return (
    <div className="App">
      <Header search={search} btn={btn} tus={tus} change={change} />
      <Routes>
        <Route
          path="/"
          element={<Main arr={data.arr} aii={data.aii} data={data.dataTask} />}
        />
        <Route path="/form" element={<Form handle={btn} />} />
      </Routes>
    </div>
  );
};

export default App;
