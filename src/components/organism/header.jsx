import React from 'react';
import 'materialize-css';
import styled from 'styled-components';
import { Navbar, NavItem } from 'react-materialize';
import { LabelSailecMedium } from '../atoms/label.jsx';
import { COLOR, SIZE, SCREEN_MEDIA, LABEL } from '../../utils/constants.js';

import PathLogo from '../../icons/ic_logo.svg';
import PathBurger from '../../icons/ic_burger.svg';


const Logo = styled.img`
    height: 40px;
    top: 10px;
    position: relative;
`;
const Burger = styled.img`
    width: 20px;
    position: relative;
`;

const logo_dom = <a href='/'><Logo src={PathLogo}></Logo></a>
const burger_dom = <Burger src={PathBurger}></Burger>;

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
    <div>
        <NavbarStyled 
            alignLinks='right'
            brand={logo_dom}
            fixed={true}
            menuIcon={burger_dom}>

            <NavItemStyled
                href='/'>
                <LabelMediumBodySecondary>{LABEL.initial}</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled>
                <LabelMediumBodySecondary>Matrícula 2021</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled
                href='/nosotros'>
                <LabelMediumBodySecondary>{LABEL.us}</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled>
                <LabelMediumBodySecondary>Nuestra Propuesta</LabelMediumBodySecondary>
            </NavItemStyled>

            <NavItemStyled
                href='/contact'>
                <LabelMediumBodySecondary>{LABEL.contact}</LabelMediumBodySecondary>
            </NavItemStyled>

        </NavbarStyled>
    </div>
    
);

export default Header;