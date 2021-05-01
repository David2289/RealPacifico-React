import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SIZE, COLOR } from '../../utils/constants.js';
import { LabelRegular } from '../atoms/label.jsx'


const Root = styled.a`
    color: ${COLOR.white}
`;

const IconContent = styled.div`
    width: 26px;
    height: 26px;
    margin-left: 15px;
    margin-right: 15px;
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
    display: block;
`;

const LabelRegularBodyWhite = styled(LabelRegular)`
    font-size: ${SIZE.body};
    color: ${COLOR.white};
    margin-right: 15px;
`;


const TextButton = (props) => {
    return (
        <Root 
            className='valign-wrapper'
            href={props.href}
            target={props.target}>
            <IconContent>
                <Icon src={props.ic_path}></Icon>
            </IconContent>
            <LabelRegularBodyWhite>{props.children}</LabelRegularBodyWhite>
        </Root>
    );
}

TextButton.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    ic_path: PropTypes.string
}

export default TextButton;