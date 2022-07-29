import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => {

    return (
        <div className='side'>
            <button className='btn btn-secondary' id={props.dataSet} onClick={props.handbal} >{props.title}</button>
        </div>
    );
};
export default Sidebar;