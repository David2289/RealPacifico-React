import React from 'react';
import 'materialize-css';
import { Footer } from 'react-materialize';
import { COLOR } from '../../commons/constants.js';
import TextButton from '../../atoms/textbutton.jsx';
import styled from 'styled-components';


const path_bg = require('../../../images/img_5.jpg');
const path_logo = require('../../../images/ic_logo_white.svg');

const url_wapp = "https://api.whatsapp.com/send/?phone=51901617680&text=Deseo+obtener+información&app_absent=0";
const url_fb = "https://www.facebook.com/pg/colegiorealpacifico/";
const url_insta = "https://www.instagram.com/colegiorealpacifico/";
const path_wapp = require('../../../images/ic_wapp.svg');
const path_fb = require('../../../images/ic_fb.svg');
const path_insta = require('../../../images/ic_insta.svg');
const path_landline = require('../../../images/ic_landline.svg');
const path_mobile = require('../../../images/ic_mobile.svg');

const current_year = new Date().getFullYear();
const copyright_label = "Copyright \xA9" + current_year.toString() + " Todos los derechos reservados";


const links = 
<ul className='list_separation_20'>
    <li>
        <TextButton 
            href={url_wapp}
            target="_blank"
            ic_path={path_wapp}>
                WhatsApp
        </TextButton>
    </li>
    <li>
        <TextButton 
            href={url_fb}
            target="_blank"
            ic_path={path_fb}>
                Facebook
        </TextButton>
    </li>
    <li>
        <TextButton 
            href={url_insta}
            target="_blank"
            ic_path={path_insta}>
                Instagram
        </TextButton>
    </li>
    <li>
        <TextButton 
            href="#"
            target="_blank"
            ic_path={path_landline}>
                43-310620
        </TextButton>
    </li>
    <li>
        <TextButton 
            href="#"
            target="_blank"
            ic_path={path_mobile}>
                947670628
        </TextButton>
    </li>
</ul>;


const FooterStyled = styled(Footer)`
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
    img {
        width: 180px;
        margin: auto;
    }
`;

const Feet = () => (
    <FooterStyled
        copyrights={copyright_label}
        links={links}
        >
        <LogoContent className='valign-wrapper'>
            <img src={path_logo} />
        </LogoContent>
    </FooterStyled>
);

export default Feet;