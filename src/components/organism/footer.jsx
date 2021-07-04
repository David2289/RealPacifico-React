import React from 'react';
import styled from 'styled-components';
import { Footer as Feet } from 'react-materialize';
import { COLOR } from '../../utils/constants.js';
import TextButton from '../atoms/textbutton.jsx';
import SVG from 'react-inlinesvg';

import PathLogo from '../../icons/ic_logo.svg';
import PathLandline from '../../icons/ic_landline.svg';
import PathMobile from '../../icons/ic_mobile.svg';


const path_bg = require('../../images/img_5.jpg');

const url_wapp = "https://api.whatsapp.com/send/?phone=51901617680&text=Deseo+obtener+información&app_absent=0";
const url_fb = "https://www.facebook.com/pg/colegiorealpacifico/";
const url_insta = "https://www.instagram.com/colegiorealpacifico/";
const path_wapp = require('../../icons/ic_wapp.svg');
const path_fb = require('../../icons/ic_fb.svg');
const path_insta = require('../../icons/ic_insta.svg');

const current_year = new Date().getFullYear();
const copyright_label = "Copyright \xA9" + current_year.toString() + " Todos los derechos reservados";


const List = styled.ul`
    li {
        margin-bottom: 20px;
        display: flex; // To avoid purple padding on <a> tag
    }
`;

const links = 
<List>
    <li>
        <TextButton 
            href={url_wapp}
            target="_blank"
            ic_path={path_wapp}
            title_color={COLOR.white}>
                WhatsApp
        </TextButton>
    </li>
    <li>
        <TextButton 
            href={url_fb}
            target="_blank"
            ic_path={path_fb}
            title_color={COLOR.white}>
                Facebook
        </TextButton>
    </li>
    <li>
        <TextButton 
            href={url_insta}
            target="_blank"
            ic_path={path_insta}
            title_color={COLOR.white}>
                Instagram
        </TextButton>
    </li>
    <li>
        <TextButton 
            href="#"
            target="_blank"
            ic_path={PathLandline}
            ic_color={COLOR.white}
            title_color={COLOR.white}>
                43-310620
        </TextButton>
    </li>
    <li>
        <TextButton 
            href="#"
            target="_blank"
            ic_path={PathMobile}
            ic_color={COLOR.white}
            title_color={COLOR.white}>
                947670628
        </TextButton>
    </li>
</List>;


const FeetStyled = styled(Feet)`
    margin: 100px 0 0 0;
    background-image: url(${path_bg});
    // Cover and center background image: //
    background-position: 50% 50%; /*El cuadro ajustado se puede centrar horizontal y verticalmente*/
    background-size: cover; /*El cuadro de la imagen se ajusta a la dimensión más pequeña del div con el objetivo de cubrirla*/
    background-repeat: no-repeat;
    // To make the overlay: //
    position: relative;
    z-index: 0;
    &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: ${COLOR.secondary};
        opacity: 0.6;
    }
`;

const LogoContent = styled.div`
    margin: 20px 0 30px 0;
`;

const Logo = styled(SVG)`
    fill: ${COLOR.white};
    margin: auto;
    height: 150px;
`;

const Footer = () => (
    <FeetStyled
        copyrights={copyright_label}
        links={links} >
        <LogoContent className='valign-wrapper'>
            <Logo src={PathLogo} />
        </LogoContent>
    </FeetStyled>
);

export default Footer;