import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SCREEN_MEDIA } from '../../utils/constants.js';
import { LabelHarmonyRegular, LabelHarmonyLite } from '../atoms/label.jsx';


const SlideStyled = styled.div`
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    background-image: url(${props => props.background});
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

const Title = styled(LabelHarmonyRegular)`
    width: 78%;
    font-size: 125px;
    position: absolute;
    top: 15%;
	left: 7%;
    color: ${COLOR.white};
    @media only screen and ${SCREEN_MEDIA.small} {
        width: 78%;
        font-size: 25px;
    }
    @media only screen and ${SCREEN_MEDIA.medium} {
        width: 70%;
        font-size: 30px;
    }
    @media only screen and ${SCREEN_MEDIA.long} {
        width: 65%;
        font-size: 35px;
    }
    @media only screen and ${SCREEN_MEDIA.xlong} {
        width: 60%;
        font-size: 55px;
    }
`;

const Description = styled(LabelHarmonyLite)`
    width: 60%;
    font-size: 35px;
    position: absolute;
    top: 45%;
    right: 10%;
    color: ${COLOR.white};
    @media only screen and ${SCREEN_MEDIA.small} {
        width: 78%;
        right: 5%;
        font-size:26px;
    }
    @media only screen and ${SCREEN_MEDIA.medium} {
        width: 70%;
        right: 6%;
        font-size:28px;
    }
    @media only screen and ${SCREEN_MEDIA.long} {
        width: 65%;
        right: 8%;
        font-size:32px;
    }
    @media only screen and ${SCREEN_MEDIA.xlong} {
        width: 60%;
        right: 10%;
        font-size: 35px;
    }
`;

const Slide = (props) => {
    return (
        <SlideStyled id='slide' background={props.bg_path}>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </SlideStyled>
    );
}

Slide.propTypes = {
    bg_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Slide;