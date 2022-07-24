import React from 'react';
import PropTypes from 'prop-types';
import "./sidebar.css"
const Sidebar = props => {
    return (
        <div className='side'>
            <button onClick={props.handbal} >{props.title} </button>
        </div>
    );
};



export default Sidebar;