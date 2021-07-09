import React from 'react';
import styled from 'styled-components';
import TitleSect from '../atoms/titlesect.jsx';
import TextInput from '../atoms/textinput.jsx';
import TextArea from '../atoms/textarea.jsx';
import Button from '../atoms/button.jsx';
import { COLOR } from '../../utils/constants.js';

const Containter = styled.div`
    overflow: auto; // To cover height with contents
    padding: 30px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02), 
                0 2px 4px rgba(0,0,0,0.02), 
                0 4px 8px rgba(0,0,0,0.02), 
                0 8px 16px rgba(0,0,0,0.02),
                0 16px 32px rgba(0,0,0,0.02);
`;


const Contact = () => {
    return(
        <Containter>
            <TitleSect>
                Escríbenos
            </TitleSect>
            <TextInput 
                id='name'
                type='text' 
                placeholder='Nombre'
                margin='40px 0 20px 0'/>
            <TextInput 
                id='email'
                type='email' 
                placeholder='Email'
                margin='20px 0'/>
            <TextArea 
                id='message'
                placeholder='Mensaje'
                margin='20px 0'/>
            <Button
                type='submit'
                bg_color={COLOR.primary}>
                Enviar
            </Button>
        </Containter>
    );
}

export default Contact;