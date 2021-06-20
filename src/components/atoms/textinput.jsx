import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div className='input-field input-outlined'>
            <input 
                id='last_name' 
                type={props.type} 
                placeholder={props.placeholder}/>
        </div>
    );
}

TextInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

export default TextInput;