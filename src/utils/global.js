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
`;

export {
    Root
}