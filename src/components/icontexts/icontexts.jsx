import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Title, Description } from './icontexts.js';
import { ThemeProvider } from 'styled-components';

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