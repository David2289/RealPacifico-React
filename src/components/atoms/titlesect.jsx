import React from 'react';
import PropTypes from 'prop-types';
import { COLOR, SIZE } from '../../utils/constants.js'
import { LabelSailecBold } from '../commons/labels.js'
import styled, { ThemeProvider } from 'styled-components';


const TitleDisplay = styled(LabelSailecBold)`
    font-size: ${SIZE.display};
    color: ${props => props.theme.color};
`;

TitleDisplay.defaultProps = {
    theme: {
        color: COLOR.secondary
    }
}

const TitleUnderline = styled.div`
    width: 90px;
    height: 4px;
    background-color: ${COLOR.primary};
    margin-top: 10px;
`;


const TitleSect = (props) => {

    const theme = {
        color: props.color ? props.color : COLOR.secondary
    }

    console.table(theme);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <TitleDisplay>{props.children}</TitleDisplay>
            </ThemeProvider>
            <TitleUnderline></TitleUnderline>
        </div>
    );
}

TitleSect.propTypes = {
    color: PropTypes.string
}

export default TitleSect;