import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as MatButton } from 'react-materialize';
import { COLOR } from '../../utils/constants.js'

const ButtonStyled = styled(MatButton)`
    color: ${COLOR.grayDark};
    background-color: ${COLOR.primary};
    text-transform: none;
    margin: ${props => props.margin ? props.margin : '0 0'};
    &:hover {
        color: ${COLOR.background};
        background-color: ${COLOR.primaryDark};
    }
`;

const Button = (props) => {
    return (
        <ButtonStyled
            type={props.type}
            margin={props.margin}>
            {props.children}
        </ButtonStyled>
    );
}

Button.propTypes = {
    type: PropTypes.string, 
    margin: PropTypes.string
}

export default Button;