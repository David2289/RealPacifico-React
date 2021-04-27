import React from 'react';
import './footer.scss';
import 'materialize-css';
import {Footer} from 'react-materialize';


const path_logo = require('../../../images/ic_logo_white.svg');


const path_wapp = require('../../../images/ic_wapp.svg');
const dom_wapp = 
    <div className='contact_content valign-wrapper'>
        <div><img className='contact_icon' src={path_wapp}/></div>
        <p>WhatsApp</p>
    </div>;

const path_fb = require('../../../images/ic_fb.svg');
const dom_fb = 
    <div className='contact_content valign-wrapper'>
        <div><img className='contact_icon' src={path_fb}/></div>
        <p>Facebook</p>
    </div>;

const path_insta = require('../../../images/ic_insta.svg');
const dom_insta = 
    <div className='contact_content valign-wrapper'>
        <div><img className='contact_icon' src={path_insta}/></div>
        <p>Instagram</p>
    </div>;

const path_landline = require('../../../images/ic_landline.svg');
const dom_landline = 
    <div className='contact_content valign-wrapper'>
        <div><img className='contact_icon' src={path_landline}/></div>
        <p>43-310620</p>
    </div>;

const path_mobile = require('../../../images/ic_mobile.svg');
const dom_mobile = 
    <div className='contact_content valign-wrapper'>
        <div><img className='contact_icon_vertical' src={path_mobile}/></div>
        <p>947670628</p>
    </div>;

const current_year = new Date().getFullYear();
const copyright_label = "Copyright \xA9" + current_year.toString() + " Todos los derechos reservados";


const links = 
<ul className='list_separation_20'>
    <li><a href="https://api.whatsapp.com/send/?phone=51901617680&text=Deseo+obtener+información&app_absent=0" target="_blank">{dom_wapp}</a></li>
    <li><a href="https://www.facebook.com/pg/colegiorealpacifico/" target="_blank">{dom_fb}</a></li>
    <li><a href="https://www.instagram.com/colegiorealpacifico/" target="_blank">{dom_insta}</a></li>
    <li><a href="#">{dom_landline}</a></li>
    <li><a href="#">{dom_mobile}</a></li>
</ul>;

const Feet = () => (
    <Footer
    className="footer"
    copyrights={copyright_label}
    links={links}
    >
        <div className='logo_content valign-wrapper'>
            <img src={path_logo} />
        </div>
    </Footer>
);

export default Feet;