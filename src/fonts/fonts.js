import { createGlobalStyle } from 'styled-components';

import SailecRegular from './sailec-regular-webfont.woff';
import SailecRegular2 from './sailec-regular-webfont.woff2';

import SailecMedium from './sailec-medium-webfont.woff';
import SailecMedium2 from './sailec-medium-webfont.woff2';

import SailecBold from './sailec-bold-webfont.woff';
import SailecBold2 from './sailec-bold-webfont.woff2';

import SailecLight from './sailec-light-webfont.woff';
import SailecLight2 from './sailec-light-webfont.woff2';


const FontRegular = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Regular';
        src: local('Sailec Regular'), local('Sailec Regular'),
        url(${SailecRegular2}) format('woff2'),
        url(${SailecRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontMedium = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Medium';
        src: local('Sailec Medium'), local('Sailec Medium'),
        url(${SailecMedium2}) format('woff2'),
        url(${SailecMedium}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontBold = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Bold';
        src: local('Sailec Bold'), local('Sailec Bold'),
        url(${SailecBold2}) format('woff2'),
        url(${SailecBold}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

const FontLight = createGlobalStyle`
    @font-face {
        font-family: 'Sailec Light';
        src: local('Sailec Light'), local('Sailec Light'),
        url(${SailecLight2}) format('woff2'),
        url(${SailecLight}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;


export { 
    FontRegular,
    FontMedium,
    FontBold,
    FontLight
}