import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import add from '../data';
import { datak } from '../run';
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
        if(element.title==val){
            a++;
         }
    });
    if(a>0){
        return true
    }else{
        return false
    }    

}
    function handleSubmit(e){  
        e.preventDefault()
      console.table(check(title))
        let a=0;      
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
        <form onSubmit={handleSubmit} method='GET' className='formHeader'>
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