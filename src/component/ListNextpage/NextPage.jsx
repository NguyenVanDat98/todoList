import React from 'react';
import PropTypes from 'prop-types';

const NextPage = props => {
const {num}=props
console.log(num);
    return (       
            <button>{num}</button>       
    );
};

NextPage.propTypes = {
    
};

export default NextPage;