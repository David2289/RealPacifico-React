import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../../utils/constants';
import { TextInput as MatInput } from 'react-materialize';

const InputContent = styled.div`
    > input {
        border: 2px solid ${COLOR.grayClear};
        padding: 12px 16px 14px;
        width: calc(100% - 2.5rem);
        float: none;
        display: block;
        border-radius: 4px;
        transition: box-shadow, border-color 0.15s;
        &:focus:not([readonly]) {
            border-color: ${COLOR.primary};
            box-shadow: 0 1px 0 0px ${COLOR.primary}; //Change the bottom border color
        }
    }
    > label {
        left: 20px;
        display: inline-flex;
        width: auto;
        &:active {
            background: ${COLOR.secondaryClear};
            border-left: 4px solid white;
            border-right: 4px solid white;
            transform: translateY(4px);
            top: 10rem;
        }
    }
`;

const MyInput = styled.input`
    // border: 20px solid ${COLOR.grayClear};
    // padding: 100px;
    // width: calc(100% - 2.5rem);
    // float: none;
    // display: block;
    // border-radius: 4px;
    // transition: box-shadow, border-color 0.15s;
    // &:focus:not([readonly]) {
    //     border-color: ${COLOR.primary};
    //     box-shadow: 0 1px 0 0px ${COLOR.primary}; //Change the bottom border color
    // }
`;

const TextInput = () => {
    return (
        <div>
            <MatInput />
        </div>
    );
}

export default TextInput;