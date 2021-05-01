import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { COLOR } from '../../utils/constants.js';
import { LabelBoldBodyBlack, LabelRegularBodyBlack } from '../commons/labels.js';


const Icon = styled.img`
    height: '60px';
`;

const Title = styled(LabelBoldBodyBlack)`
    color: ${props => props.theme.color};
    text-align: ${props => props.theme.alignment};
`;

const Description = styled(LabelRegularBodyBlack)`
    color: ${props => props.theme.color};
    text-align: ${props => props.theme.alignment};
`;

Description.defaultProps = {
    theme: {
        color: COLOR.secondary,
        alignment: 'left'
    }
}


const IconTexts = (props) => {

    const theme = {
        color: props.color ? props.color : COLOR.secondary,
        alignment: props.centered ? 'center' : 'left'
    }

    return (
        <div>
            <Icon src={props.ic_path}></Icon>

            <ThemeProvider theme={theme}>
                <Title>{props.title}</Title>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
                <Description>{props.desc}</Description>
            </ThemeProvider>
        </div>
    );
}

IconTexts.propTypes = {
    ic_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    color: PropTypes.string,
    centered: PropTypes.bool
}

export default IconTexts;