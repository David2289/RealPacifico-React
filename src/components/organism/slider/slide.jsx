import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../../../utils/constants.js';
import './slide.scss';


const SlideStyled = styled.div`
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    // Cover and center background image: //
    background-position: 50% 50%; /*El cuadro ajustado se puede centrar horizontal y verticalmente*/
    background-size: cover; /*El cuadro de la imagen se ajusta a la dimensión más pequeña del div con el objetivo de cubrirla*/
    background-repeat: no-repeat;
    // To make the overlay: //
    position: absolute;
    z-index: 0;
    &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: ${COLOR.secondary};
        opacity: 0.6;
    }
`;

const Slide = (props) => {
    return (
        <SlideStyled id='slide' style={{backgroundImage: `url(${props.bg_path})`}}>
            <p className='slide_title'>{props.title}</p>
            <p className='slide_description'>{props.description}</p>
        </SlideStyled>
    );
}

Slide.propTypes = {
    bg_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Slide;