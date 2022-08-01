import React, { useState } from 'react';
import PropTypes from 'prop-types';

import add from '../data';
import { datak } from '../run';



const Form = props => {
    const {sty , handle} = props
    const [title , setTitle] = useState("")
    const [name , setName] = useState('')
    const [mess , setDess] = useState('')

    function handleSubmit(){  
        let a =0;
        document.querySelectorAll(".formHeader input").forEach((e) => {
        if (e.value == "") {
            console.log(a);
            return a++;
            }
        })
        if (a > 0) {
            alert("không được để trống");
        } 
        else {
            // datak("dataa",add());  
            let dataItem={title,name,mess};
            let b={...dataItem,stt:"New" }
            console.log(b);
            let data = datak("dataa", add()).dataTask
            data.push(b)
            localStorage.setItem("dataa", JSON.stringify(data));
            // console.log(data);
            setTitle("");
            setName("");
            setDess("");
            handle();
            }            
    }    

    return (
        <div  className='formHeader' style={{display : sty }}>
            <div className='item-input'>
                <label htmlFor="title">Title :</label>
                <input type="text" onChange={e=>setTitle(e.target.value)} value={title} id="title" />
            </div>
            <div className='item-input'>
                <label htmlFor="creator">Creator :</label>
                <input type="text" onChange={e=>setName(e.target.value)} value={name} id="creator" />
            </div>
            <div className='item-input'>
                <label htmlFor="desscription">Desscription : </label>
                <textarea  onChange={e=>setDess(e.target.value)}  value={mess} rows="5"></textarea>
            </div>
            <div className="addNew">
                <button onClick={handleSubmit}>ADD CREATE</button>
            </div>           
        </div>
    );
};

Form.propTypes = {
    sty : PropTypes.string
};

export default Form;