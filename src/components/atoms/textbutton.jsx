import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SIZE, COLOR } from '../commons/constants.js';
import { LabelRegular } from '../atoms/label.jsx'


const Root = styled.div`
    &:hover {
        cursor:pointer;
    }
`;

const Icon = styled.img`
    height: 26px;
    display: block;
    margin-left: 15px;
    margin-right: 15px;
`;

const LabelRegularBodyWhite = styled(LabelRegular)`
    font-size: ${SIZE.body};
    color: ${COLOR.white};
    margin-right: 15px;
`;


const TextButton = (props) => {
    return (
        <Root className='valign-wrapper'>
            
            <Icon src={props.ic_path}></Icon>
            
            <LabelRegularBodyWhite>{props.children}</LabelRegularBodyWhite>

        </Root>
    );
}

TextButton.propTypes = {
    ic_path: PropTypes.string
}

export default TextButton;