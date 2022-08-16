import React from 'react';
import PropTypes from 'prop-types';
import storeState from '../store/storeState';
import { observer } from "mobx-react"


const Coust = props => {
   
    return (
        <div>
            <button className='btn btn-primary' onClick={()=>storeState.increase()}>push</button>
            <button className='btn btn-primary' onClick={()=>storeState.dess()}>delete</button>
            <button className='btn btn-primary' onClick={()=>storeState.reset()}>reset</button>
            <h1>{storeState.secondsPassed}</h1>
        </div>
    );
};


export default observer(Coust )  ;