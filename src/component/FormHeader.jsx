import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = props => {
    const{sty , handle}=props

    return (
        <div  className='formHeader' style={{display : sty }}>
            <div className='item-input'>
                <label htmlFor="title">Title :</label>
                <input type="number" id="title" />
            </div>
            <div className='item-input'>
                <label htmlFor="creator">Creator :</label>
                <input type="text" id="creator" />
            </div>
            <div className='item-input'>
                <label htmlFor="desscription">Desscription : </label>
                <textarea id='desscription' rows="5"></textarea>
            </div>
            <div className="addNew">
                <button onClick={handle}>ADD CREATE</button>
            </div>           
        </div>
    );
};

FormHeader.propTypes = {
    sty : PropTypes.string
};

export default FormHeader;