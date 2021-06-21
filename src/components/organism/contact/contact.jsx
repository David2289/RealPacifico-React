import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/textinput.jsx';
import TextArea from '../../atoms/textarea.jsx';
import Button from '../../atoms/button.jsx';


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
            <Button
                type="submit">
                Enviar
            </Button>
        </div>
    );
}

export default Contact;