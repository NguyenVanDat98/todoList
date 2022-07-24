import React from 'react';
import PropTypes from 'prop-types';
import "./StyleHeader.css"
import FormHeader from './FormHeader';
import { useState } from 'react';


const Header = props => {
    const [tus , settus] =  useState("none"); 
    
   

    function btn (){
        if(tus==="none"){
            settus("block")
            document.getElementById("list").style.display ="none"

        }else {
            settus("none")
            document.getElementById("list").style.display ="grid"
        }
    }
    
    return (
        <div  className='header  bg-primary justify-content-between'>
            <FormHeader sty={tus}/>
            <div className="home">
                <button onClick={btn}  type="button">Home</button>
            </div>
            <div className="search">
                <input type="search" placeholder='Search' />        
                <button>Search</button>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;