import React from 'react';
import PropTypes from 'prop-types';
import './slider.scss';
import Slide from './slide.jsx';

const path_slide1 = require('../../../images/img_1.jpg');
const path_slide2 = require('../../../images/img_2.jpg');
const path_slide3 = require('../../../images/img_3.jpg');

const Slider = (props) => {
    var bubbles_visible = props.showBubble ? 'visible' : 'hidden';

    return (
        <div id='slider_content'>
            <Slide 
            bg_path={path_slide1}
            title='Excelente nivel académico'
            description='Potenciamos el desarrollo intelectual y personal de nuestros estudiantes a través de un eficiente sistema educativo en el campo de las Matemáticas, Ciencias, Letras y Desarrollo Personal.'>
            </Slide>

            <Slide 
            bg_path={path_slide2}
            title='La mejor propuesta educativa'
            description='"La exigencia saca lo mejor de cada estudiante"'>
            </Slide>

            <Slide 
            bg_path={path_slide3}
            title='La mejor plana docente'
            description='Los mejores docentes, con la más alta experiencia académica. Siempre actualizados.'>
            </Slide>

            <div className='bubble_content' style={{visibility: bubbles_visible}}>
                <div>
                    <span className='bubble_under'></span>
                    <span className='bubble_over'></span>
                </div>
                <div>
                    <span className='bubble_under'></span>
                    <span className='bubble_over'></span>
                </div>
                <div>
                    <span className='bubble_under'></span>
                    <span className='bubble_over'></span>
                </div>
            </div>
        </div>
    );
}

Slider.propTypes = {
    showBubble: PropTypes.bool.isRequired
}


export default Slider;