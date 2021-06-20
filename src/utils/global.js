import { createGlobalStyle } from 'styled-components';
import { COLOR } from '../utils/constants.js';

const Root = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background: ${COLOR.background};
    }

    // To change material Text Input
    .input-field.input-outlined {
        > input {
            color: ${COLOR.gray};
            border: 2px solid ${COLOR.grayClear};
            padding: 1px 16px 0px;
            width: 100%;
            float: none;
            display: block;
            border-radius: 4px;
            transition: box-shadow, border-color 0.15s;
            &:focus:not([readonly]) {
                border-color: ${COLOR.gray};
                box-shadow: 0 1px 0 0px ${COLOR.gray};
            }
            &:focus:not([readonly]) + label {
                color: ${COLOR.gray} !important;
            }
        }
        > label {
            left: 27px;
            display: inline-flex;
            width: auto !important;
            &.active {
                background: ${COLOR.background};
                border-left: 4px solid ${COLOR.background};
                border-right: 4px solid ${COLOR.background};
                transform: translateY(-1.75rem);
                top: 1rem;
            }
        }
    }

`;

export {
    Root
}