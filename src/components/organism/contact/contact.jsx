import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../../atoms/textinput.jsx';


const Contact = () => {
    return(
        <div>
            <TextInput 
                type='text' 
                placeholder='Nombre'/>
            <TextInput 
                type='password' 
                placeholder='Email'/>
        </div>
    );
}

export default Contact;