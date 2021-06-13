import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../../../utils/constants.js';
import Slide from './slide.jsx';

const path_slide1 = require('../../../images/img_1.jpg');
const path_slide2 = require('../../../images/img_2.jpg');
const path_slide3 = require('../../../images/img_3.jpg');


const SliderContent = styled.div`
    height: 600px;
    width: 100%;
	position: relative;
	overflow: hidden;
`;

const BubbleContent = styled.div`
    height: 50px;
    width: 120px;
    margin: 0 auto;
    position: relative;
    top: 550px;
    bottom: 0;
    z-index: 40;
    > div {
        display: block;
        height: 20px;
        width: 40px;
        float: left;
    }
`;

const Bubble = styled.span`
    position: absolute;
	display: block;
	height: 12px;
	width: 12px;
	border-radius: 50%;
	float: left;
	margin: 0px 14px;
`;

const BubbleUnder = styled(Bubble)`
    border: 1px solid ${COLOR.primaryClear};
    &:hover {
        cursor: pointer;
        background: ${COLOR.primaryClear};
    }
`;

const BubbleOver = styled(Bubble)`
    background: ${COLOR.primary};
	opacity: 0;
    visibility: hidden;
`;

const Slider = (props) => {
    var bubbles_visible = props.showBubble ? 'visible' : 'hidden';

    return (
        <SliderContent id='slider_content'>
            <Slide 
                bg_path={path_slide1}
                title='Excelente nivel académico'
                description='Potenciamos el desarrollo intelectual y personal de nuestros estudiantes a través de un eficiente sistema educativo en el campo de las Matemáticas, Ciencias, Letras y Desarrollo Personal.'/>

            <Slide 
                bg_path={path_slide2}
                title='La mejor propuesta educativa'
                description='"La exigencia saca lo mejor de cada estudiante"'/>

            <Slide 
                bg_path={path_slide3}
                title='La mejor plana docente'
                description='Los mejores docentes, con la más alta experiencia académica. Siempre actualizados.'/>

            <BubbleContent style={{visibility: bubbles_visible}}>
                <div>
                    <BubbleUnder id='bubble_under'/>
                    <BubbleOver id='bubble_over'/>
                </div>
                <div>
                    <BubbleUnder id='bubble_under'/>
                    <BubbleOver id='bubble_over'/>
                </div>
                <div>
                    <BubbleUnder id='bubble_under'/>
                    <BubbleOver id='bubble_over'/>
                </div>
            </BubbleContent>
        </SliderContent>
    );
}

Slider.propTypes = {
    showBubble: PropTypes.bool.isRequired
}


export default Slider;