import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = props => {
    const{sty}=props
    console.log(sty);
    return (
        <div  className='formHeader' style={{display : sty }}>
            <div className='item-input'>
                <label htmlFor="creator">Title :</label>
                <input type="number" id="creator" />
            </div>
            <div className='item-input'>
                <label htmlFor="creator">Creator :</label>
                <input type="text" id="creator" />
            </div>
            <div className='item-input'>
                <label htmlFor="creator">Desscription : </label>
                <textarea  rows="5"></textarea>
            </div>
            <div className="addNew">
                <button>ADD CREATE</button>
            </div>
           
        </div>
    );
};

FormHeader.propTypes = {
    sty : PropTypes.string
};

export default FormHeader;