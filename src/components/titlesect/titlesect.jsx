import React from 'react';
import PropTypes from 'prop-types';
import { COLOR, SIZE } from '../commons/base.js'
import { TitleLabel, TitleUnderline } from './titlesect.js'
import { ThemeProvider } from 'styled-components';


const TitleSect = (props) => {

    const theme = {
        size: props.size ? props.size : SIZE.fontTitle,
        color: props.color ? props.color : COLOR.secondary
    }

    console.table(theme);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <TitleLabel>{props.title}</TitleLabel>
            </ThemeProvider>
            <TitleUnderline></TitleUnderline>
        </div>
    );
}

TitleSect.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string
}

export default TitleSect;