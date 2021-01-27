import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Feet from './components/footer/footer.jsx';
import Slide from './components/slider/slide.jsx';

ReactDOM.render(
    <Header></Header>, 
    document.getElementById("header")
);


const path_slide1 = require('./images/img_1.jpg');
const path_slide2 = require('./images/img_2.jpg');
const path_slide3 = require('./images/img_3.jpg');

ReactDOM.render(
    <Slide 
    bg_path={path_slide1}
    title='Excelente nivel académico'
    description='Potenciamos el desarrollo intelectual y personal de nuestros estudiantes a través de un eficiente sistema educativo en el campo de las Matemáticas, Ciencias, Letras y Desarrollo Personal.'>
    </Slide>, 
    document.getElementById("slider")
);

ReactDOM.render(
    <Feet></Feet>, 
    document.getElementById("feet")
);