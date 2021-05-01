import React from 'react';
import styled from 'styled-components';
import { 
    FontSailecRegular, 
    FontSailecMedium, 
    FontSailecBold, 
    FontSailecLight, 
    FontHarmonyRegular, 
    FontHarmonyLite } from '../../fonts/fonts.js'


const LabelSailecRegularStyled = styled.p`
    font-family: 'Sailec Regular';
`;

const LabelSailecMediumStyled = styled.p`
    font-family: 'Sailec Medium';
`;

const LabelSailecBoldStyled = styled.p`
    font-family: 'Sailec Bold';
`;

const LabelSailecLightStyled = styled.p`
    font-family: 'Sailec Light';
`;

const LabelHarmonyRegularStyled = styled.p`
    font-family: 'Harmony Regular';
`;

const LabelHarmonyLiteStyled = styled.p`
    font-family: 'Harmony Lite';
`;


const LabelSailecRegular = (props) => {
    return (
        <div>
            <FontSailecRegular></FontSailecRegular>
            <LabelSailecRegularStyled>{props.children}</LabelSailecRegularStyled>
        </div>
    );
}

const LabelSailecMedium = (props) => {
    return (
        <div>
            <FontSailecMedium></FontSailecMedium>
            <LabelSailecMediumStyled>{props.children}</LabelSailecMediumStyled>
        </div>
    );
}

const LabelSailecBold = (props) => {
    return (
        <div>
            <FontSailecBold></FontSailecBold>
            <LabelSailecBoldStyled>{props.children}</LabelSailecBoldStyled>
        </div>
    );
}

const LabelSailecLight = (props) => {
    return (
        <div>
            <FontSailecLight></FontSailecLight>
            <LabelSailecLightStyled>{props.children}</LabelSailecLightStyled>
        </div>
    );
}

const LabelHarmonyRegular = (props) => {
    return (
        <div>
            <FontHarmonyRegular></FontHarmonyRegular>
            <LabelHarmonyRegularStyled>{props.children}</LabelHarmonyRegularStyled>
        </div>
    );
}

const LabelHarmonyLite = (props) => {
    return (
        <div>
            <FontHarmonyLite></FontHarmonyLite>
            <LabelHarmonyLiteStyled>{props.children}</LabelHarmonyLiteStyled>
        </div>
    );
}


export {
    LabelSailecRegular, 
    LabelSailecMedium, 
    LabelSailecBold, 
    LabelSailecLight,
    LabelHarmonyRegular,
    LabelHarmonyLite
}