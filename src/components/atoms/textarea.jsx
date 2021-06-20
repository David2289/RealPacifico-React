import React from 'react';
import PropTypes from 'prop-types';
import { Textarea as MatTextArea } from 'react-materialize';

const TextArea = (props) => {
    return (
        <div className='input-field input-outlined'>
            <textarea 
                className='materialize-textarea'
                id={props.id} 
                placeholder={props.placeholder}
                maxLength={props.length} />
        </div>
    );
}

TextArea.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    length: PropTypes.string
}

export default TextArea;