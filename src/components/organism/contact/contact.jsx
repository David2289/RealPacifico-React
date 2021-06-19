import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/textinput.jsx';

const TextInputStyled = styled(TextInput)`
    border: 2px solid #f542d1;
    background-color: #555555;
    color: #6D6B66;
    float: none;
    display: block;
    border-radius: 4px;
`;

const Contact = () => {
    return(
        <div>
            <TextInput
                placeholder='Email'/>
        </div>
    );
}

export default Contact;