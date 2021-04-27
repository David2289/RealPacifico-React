import React from 'react';
import './header.scss';
import 'materialize-css';
import {Navbar, NavItem} from 'react-materialize';


const logo_path = require('../../../images/ic_logo_black.svg');
const logo_dom = <a className='brand-logo' href='#'><img className='navbar_logo' src={logo_path}/></a>
const burger_path = require('../../../images/ic_burger.svg');
const burger_dom = <img className='navbar_burger' src={burger_path}/>;

const Header = () => (
    <Navbar 
    className='navbar_bg' 
    alignLinks='right'
    brand={logo_dom}
    menuIcon={burger_dom}>

        <NavItem className='navitem'>
            Inicio
        </NavItem>

        <NavItem className='navitem'>
            Matrícula 2021
        </NavItem>

        <NavItem className='navitem'>
            Nosotros
        </NavItem>

        <NavItem className='navitem'>
            Nuestra Propuesta
        </NavItem>

        <NavItem className='navitem'>
            Contáctanos
        </NavItem>

    </Navbar>
);

export default Header;