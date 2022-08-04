import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { add, datak } from '../common/common';
import { useNavigate } from "react-router-dom";

const Form = props => {
    let navigate = useNavigate();
 
    const { handle} = props
    const [title , setTitle] = useState("")
    const [name , setName] = useState('')
    const [mess , setDess] = useState('')
    const [dis, setDis ]= useState("none")

function check(val){
    let data = datak("dataa", add()).dataTask
    let a=0
    data.forEach(element => {
        if(element.title==val){ a++;  }
    });
    return a>0 ? true: false;
}
    function handleSubmit(e){  
        e.preventDefault()     
        if (title == "" || name=="" ||mess=="") {
             alert( "không được để trống");                 
        } 
        else if(check(title)){
            setDis("block")
        }else {
            setDis("none")
            let dataItem={title,name,mess ,stt:"New",btn:"Start"};
            let data = datak("dataa", add()).dataTask
            data.push(dataItem)
            localStorage.setItem("dataa", JSON.stringify(data));
            setTitle("");
            setName("");
            setDess("");
            navigate("/");
            handle()
            }            
    }    

    return (
        <form  className='formHeader'>
            <div className='item-input'>
                <label htmlFor="title">Title :</label>
                <input type="text" onChange={e=>{setTitle(e.target.value)} } value={title} id="title" />
                <span style={{display : dis, color : "red" }}>Trùng title Nha</span>
            </div>
            <div className='item-input'>
                <label htmlFor="creator">Creator :</label>
                <input type="text" onChange={e=>setName(e.target.value)} value={name} id="creator" />
            </div>
            <div className='item-input'>
                <label htmlFor="desscription">Desscription : </label>
                <textarea  onChange={e=>setDess(e.target.value)} value={mess} rows="5"></textarea>
            </div>
            <div className="addNew">
                <button onClick={handleSubmit}>ADD CREATE</button>
            </div>           
        </form>
    );
};

Form.propTypes = {
    sty : PropTypes.string
};

export default Form;