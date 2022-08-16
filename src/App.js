import React, { createContext, useCallback, useEffect, useState } from "react";
import Header from "./layout/header/Header";
import Main from "./layout/main/main";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import Todoitem from "./component/todoitem";
import {fakeData, makeId, URL } from "./common/common";
import Coust from "./component/coust";
import storeState from "./store/storeState";

const UserContext=createContext()

const App = (props) => {
  const [context , setContext ]=useState();
  const [url , setURl ]=useState(URL);
  const [change, setchange] = useState(true);
  const [dataa , set ] = useState([]);
  const [data, setData ] = useState({dataTask:[],arr:[]});

  const fetchData = useCallback ( async ()=> 
   {    
    return await fetch("http://localhost:3004/TaskList")
  .then(res=>res.json())
  .then(re=>set(re))
}
  ,[change])

        useEffect(()=>{ 
          fetchData()            
        },[fetchData]);

      useEffect(()=>{
        setContext(fakeData(dataa))
          setData(fakeData(dataa))
      },[dataa||change]);
        

  function btn() {
    setchange(!change);   
  }
  function btnn(){
    setData(fakeData(data.dataTask));   
  }

  function search(e) {
    let valuee = e.toLowerCase().trim();
    // fetch(URL+`/?name_like=${valuee}&?q=${valuee}`).then(res=>res.json() ).then(res=>setData(fakeData(res)))

    let temp = fakeData(dataa).dataTask.filter((element) => {     
      return  element.title.toLowerCase().includes(valuee) ||
              element.name.toLowerCase().includes(valuee)  ||
              element.mess.toLowerCase().includes(valuee)  ||
              element.stt.toLowerCase().includes(valuee)   ? element : false;
    })

    setData(fakeData(temp));

    
  }

  return (
    <div className="App">

      <UserContext.Provider value={context}>
          <Header search={search} btn={btn} change={change} />
          
       { data.dataTask.length < 1 &&   <p>KO CO DaTA</p>}
            <Routes>
              <Route path="/learn/" element={<Main btn={btnn} datafetch={fetchData} data={data} />}></Route>
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
              <Route path="/learm/" element={<Coust/>}/>
              
            </Routes>
      </UserContext.Provider>
      
    </div>
  );
};

export default App;
