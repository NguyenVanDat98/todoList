import React, { createContext, useCallback, useEffect, useState } from "react";
import Header from "./layout/header/Header";
import Main from "./layout/main/main";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import Todoitem from "./component/todoitem";
import {fakeData, makeId, URL } from "./common/common";

const UserContext=createContext()

const App = (props) => {
  const [context , setContext ]=useState();
  const [change, setchange] = useState(true);
  const [dataa , set ] = useState([]);
  const [data, setData ] = useState({dataTask:[],arr:[]});

  const fetchData = useCallback (()=>{
   ! dataa == data.dataTask &&fetch("http://localhost:3004/TaskList").then((res)=>res.json()).then((res)=>{set(res)})  
  },[dataa])

      useEffect(()=>{ 
          fetchData()
      },[fetchData]);

      useEffect(()=>{
        setContext(fakeData(dataa))
          setData(fakeData(dataa))
          console.log(data);
      },[dataa]);
        

  function btn() {
    setchange(!change);
    setData(fakeData(data.dataTask));    
  }
  function btnn(){
    setData(fakeData(data.dataTask));   
  }

  function search(e) {
    let valuee = e.toLowerCase().trim();
    let temp = fakeData(dataa).dataTask.filter((element) => {     
      return  element.title.toLowerCase().includes(valuee) ||
              element.name.toLowerCase().includes(valuee)  ||
              element.mess.toLowerCase().includes(valuee)  ||
              element.stt.toLowerCase().includes(valuee)   ? element : false;
    })
    // localStorage.setItem("tempSearch",JSON.stringify(temp))
    setData(fakeData(temp));

    
  }

  return (
    <div className="App">

      <UserContext.Provider value={context}>
          <Header search={search} btn={btn} change={change} />
            <Routes>
              <Route path="/learn/" element={<Main btn={btnn} data={data} />}></Route>
              <Route path="/learn/form" element={<Form dataApp={data.dataTask} handle={btn} />} />
              {data.dataTask.map(({id,title,name,mess,stt,btn}, index) => (
                <Route
                  key={index}
                  path={`/learn/${index}`}
                  element={
                    <Todoitem
                      title={title}
                      name={name}
                      dess={mess}
                      status={stt}
                      txtBtn={(btn = stt == "New"? "Start" : stt == "Doing" ? "Done" : "Renew")
                      }
                    />
                  }
                />
              ))}
            </Routes>
      </UserContext.Provider>
      
    </div>
  );
};

export default App;
