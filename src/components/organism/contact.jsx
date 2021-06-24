import React from 'react';
import TitleSect from '../atoms/titlesect.jsx';
import TextInput from '../atoms/textinput.jsx';
import TextArea from '../atoms/textarea.jsx';
import Button from '../atoms/button.jsx';


const Contact = () => {
    return(
        <div>
            <TitleSect>
                Escríbenos
            </TitleSect>
            <TextInput 
                type='text' 
                placeholder='Nombre'
                margin='40px 0 20px 0'/>
            <TextInput 
                type='email' 
                placeholder='Email'
                margin='20px 0'/>
            <TextArea 
                placeholder='Mensaje'
                margin='20px 0'/>
            <Button
                type='submit'
                margin='0 0 80px 0'>
                Enviar
            </Button>
        </div>
    );
}

export default Contact;