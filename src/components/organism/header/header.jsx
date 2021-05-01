import React from 'react';
import 'materialize-css';
import styled from 'styled-components';
import { Navbar, NavItem } from 'react-materialize';
import { LabelSailecMedium } from '../../atoms/label.jsx';
import { COLOR, SIZE, SCREEN_MEDIA } from '../../../utils/constants.js';


const Logo = styled.img`
    height: 40px;
    top: 10px;
    position: relative;
`;
const Burger = styled.img`
    width: 20px;
    position: relative;
`;
const logo_path = require('../../../images/ic_logo_black.svg');
const logo_dom = <a className='brand-logo' href='#'><Logo src={logo_path}></Logo></a>
const burger_path = require('../../../images/ic_burger.svg');
const burger_dom = <Burger src={burger_path}></Burger>;

const LabelMediumBodySecondary = styled(LabelSailecMedium)`
    font-size: ${SIZE.body};
    color: ${COLOR.secondary};
`;

const NavItemStyled = styled(NavItem)`
    color: ${COLOR.secondary};
`;

const NavbarStyled = styled(Navbar)`
    @media only screen and ${SCREEN_MEDIA.small} {
        padding: 0 0px;
        background-color: ${COLOR.primary};
    }
    @media only screen and ${SCREEN_MEDIA.medium} {
        padding: 0 10px;
        background-color: ${COLOR.primary};
    }
    @media only screen and ${SCREEN_MEDIA.long} {
        padding: 0 100px;
        background-color: ${COLOR.primary};
    }
    @media only screen and ${SCREEN_MEDIA.xlong} {
        padding: 0 100px;
        background-color: ${COLOR.primary};
    }
`;

const Header = () => (
    <NavbarStyled 
        alignLinks='right'
        brand={logo_dom}
        menuIcon={burger_dom}>

        <NavItemStyled>
            <LabelMediumBodySecondary>Inicio</LabelMediumBodySecondary>
        </NavItemStyled>

        <NavItemStyled>
            <LabelMediumBodySecondary>Matrícula 2021</LabelMediumBodySecondary>
        </NavItemStyled>

        <NavItemStyled>
            <LabelMediumBodySecondary>Nosotros</LabelMediumBodySecondary>
        </NavItemStyled>

        <NavItemStyled>
            <LabelMediumBodySecondary>Nuestra Propuesta</LabelMediumBodySecondary>
        </NavItemStyled>

        <NavItemStyled>
            <LabelMediumBodySecondary>Contáctanos</LabelMediumBodySecondary>
        </NavItemStyled>

    </NavbarStyled>
);

export default Header;