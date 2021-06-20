import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/textinput.jsx';
import TextArea from '../../atoms/textarea.jsx';


const Contact = () => {
    return(
        <div>
            <TextInput 
                type='text' 
                placeholder='Nombre'/>
            <TextInput 
                type='email' 
                placeholder='Email'/>
            <TextArea 
                placeholder='Mensaje' />
        </div>
    );
}

export default Contact;