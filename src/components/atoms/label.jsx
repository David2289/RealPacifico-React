import React from 'react';
import styled from 'styled-components';
import { FontRegular, FontMedium, FontBold, FontLight } from '../../fonts/fonts.js'


const LabelRegularStyled = styled.p`
    font-family: 'Sailec Regular';
`;

const LabelMediumStyled = styled.p`
    font-family: 'Sailec Medium';
`;

const LabelBoldStyled = styled.p`
    font-family: 'Sailec Bold';
`;

const LabelLightStyled = styled.p`
    font-family: 'Sailec Light';
`;


const LabelRegular = (props) => {
    return (
        <div>
            <FontRegular></FontRegular>
            <LabelRegularStyled>{props.children}</LabelRegularStyled>
        </div>
    );
}

const LabelMedium = (props) => {
    return (
        <div>
            <FontMedium></FontMedium>
            <LabelMediumStyled>{props.children}</LabelMediumStyled>
        </div>
    );
}

const LabelBold = (props) => {
    return (
        <div>
            <FontBold></FontBold>
            <LabelBoldStyled>{props.children}</LabelBoldStyled>
        </div>
    );
}

const LabelLight = (props) => {
    return (
        <div>
            <FontLight></FontLight>
            <LabelLightStyled>{props.children}</LabelLightStyled>
        </div>
    );
}


export {
    LabelRegular, 
    LabelMedium, 
    LabelBold, 
    LabelLight
}