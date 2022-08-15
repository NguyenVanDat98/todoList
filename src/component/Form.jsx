import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {makeId, URL } from '../common/common';
import { useNavigate } from "react-router-dom";

const Form = props => {
    let navigate = useNavigate(); 
    const { handle,dataApp} = props
    const [title , setTitle] = useState("")
    const [name , setName] = useState('')
    const [mess , setDess] = useState('')
    const [disa, setDisa ]= useState("none")
    const [disb, setDisb ]= useState("none")

function check(val){
    let a=0
    dataApp.forEach(element => {
        if(element.title==val){ a++;  }
    });
    return a>0 ? true: false;
}
    function handleSubmit(e){ 
          e.preventDefault();
            if (check(title)){               
                setDisa("block")
                setDisb("none")

            }else if(title.length+name.length== 0 ){
                setDisb("block")
                setDisa("none")
            }else{
                setDisa("none")
                setDisb("none")
                let dataItem={title ,name, mess ,stt:"New",btn:"Start" ,id :makeId(12)};
            console.log(dataItem);

            fetch(URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body : JSON.stringify(dataItem)
            })
            handle()
            navigate("/learn/");
            }        
           
          
    }    

    return (
        <form onSubmit={handleSubmit} className='formHeader'>
            <div className='item-input'>
                <label htmlFor="title">Title :</label>
                <input type="text" onChange={e=>{setTitle(e.target.value)} } value={title} name="title" />
                <div className='mess-error'>
                <span style={{display : disa, color : "red" }}>Trùng title Nha</span>
                <span style={{display : disb, color : "red" }}>please, Enter something !</span>
                </div>
            </div>
            <div className='item-input'>
                <label htmlFor="creator">Creator :</label>
                <input type="text" onChange={e=>setName(e.target.value)} value={name} name="creator" />
            </div>
            <div className='item-input'>
                <label htmlFor="desscription">Desscription : </label>
                <textarea name='mess' onChange={e=>setDess(e.target.value)} value={mess} rows="5"></textarea>
            </div>
            <div className="addNew">
                <button type='submit'>ADD CREATE</button>
            </div>           
        </form>
    );
};

Form.propTypes = {
    sty : PropTypes.string
};

export default Form;