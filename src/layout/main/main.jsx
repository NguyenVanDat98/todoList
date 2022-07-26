import React, { useState } from 'react';
import PropTypes from 'prop-types';
import add from '../../data';
import Sidebar from '../../component/sidebar';

import "../style.css"
import Todolist from '../../component/todolist';
    const datalocal = JSON.parse(localStorage.getItem("dataa"))
    
    const data=[...add()];
    console.log(data);
    const arr=[];
    const aii=[];
    data.forEach((e,i)=>{
        if ((i+1)%12==0&& i!=0){          
            arr.push(data.slice(i-11,i+1))
            aii.push(arr.length)
        }
        if(i==add().length-1){
        if((i+1)%12!==0){         
        console.log("index min " +(i+1-(i+1)%12));
        console.log("max "+i);
        console.log((i+1)%12);
        arr.push(data.slice(i+1-((i+1)%12)));
        aii.push(arr.length)
        }         
        }         
    })
    console.log(aii);  

    const Main = props => {
        const [index, setInd] = useState(0);
        const [change, setchange] = useState(true);           
 
    function settxt(e) {
        arr[index].map((a,i)=>{
        if (i == e.target.id){       
            if(a.stt=="New"){
                a.stt="Doing"
            }else if(a.stt=="Doing"){
                a.stt = "Done"
            }else {a.stt="New"}
        }
    }) 
    change===true? setchange(false) :setchange(true)
    }
        function clickk(e) {
            aii.forEach((item, i) => {
                if (e.target.id == i) {
                    console.log(e.target.id);
                    setInd(i)                  
                }
            })
        }
        function sortNew(e){
        data.filter(function(arr){
                if(arr.stt==e){
                    return  console.log(arr);
                }
            })
        }
        return (
            <div id="mainContent" style={{ display: "flex", minHeight:"100vh"}} className="wrap w-100">
                <div className="sidebarList">
                    <Sidebar handbal={sortNew} title={"Sort New"} />
                    <Sidebar title={"Sort Done"} />
                    <Sidebar title={"Sort Doing"} />
                    <Sidebar title={"Sort New"} />
                </div>
                <div className="main-layout" id="mainContent" >
                    <div className="check mt-3">
                        {
                            aii.map((arc, i) =>
                                <button onClick={clickk} key={i} id={i} >{arc}</button>
                            )
                        }
                    </div>
                    <div id="list" className='w-100'>
                        {
                            <Todolist eventt={settxt} data={arr[index]}/>
                        }
                    </div>
                    <div className="check-bottom mt-3">
                        {
                            aii.map((arc, i) =>
                                <button onClick={clickk} key={i} id={i}>{arc}</button>
                            )
                        }
                    </div>
                </div>
            </div>
        );

    };

    Main.propTypes = {

    };

    export default Main;