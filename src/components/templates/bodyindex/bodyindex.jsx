import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Parallax } from 'react-materialize';
import { COLOR, SIZE, SCREEN_MEDIA } from '../../../utils/constants.js';
import Slider from '../../organism/slider/slider.jsx';
import RowInfo from '../../organism/rowinfo/rowinfo.jsx';
import TitleSect from '../../atoms/titlesect.jsx';
import IconTexts from '../../molecules/icon_texts.jsx';

import PathIcHeart from '../../../icons/ic_heart.svg';
import PathIcAtom from '../../../icons/ic_atom.svg';
import PathIcInitial from '../../../icons/ic_edu_initial.svg';
import PathIcNotebook from '../../../icons/ic_edu_notebook.svg';
import PathIcGraduation from '../../../icons/ic_edu_graduation.svg';

const path_classroom_img = require('../../../images/img_6.jpg');
const path_img_15 = require('../../../images/img_15.jpg');
const path_img_13 = require('../../../images/img_13.jpg');

const RowStyled = styled(Row)`
    margin: 80px 0; // default row margin
`;

const ParallaxStyled = styled(Parallax)`
    margin: 60px 0;
    // Cover and center background image: //
    background-position: 50% 50%; /*El cuadro ajustado se puede centrar horizontal y verticalmente*/
    background-size: cover; /*El cuadro de la imagen se ajusta a la dimensión más pequeña del div con el objetivo de cubrirla*/
    background-repeat: no-repeat;
    // To make the overlay: //
    position: relative;
    z-index: -1;
    &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        background: ${COLOR.secondary};
        opacity: 0.6;
    }
    @media only screen and ${SCREEN_MEDIA.small} {
        height: 900px;
    }
    @media only screen and ${SCREEN_MEDIA.medium} {
        height: 600px;
    }
`;

const ParallaxBody = styled(Container)`
    position: relative;
    z-index: 1;
`;

const BodyIndex = () => {
    return (
        <div>
            <Slider 
                showBubble={true}
                />

            <Container>
                <RowStyled>
                    <Col s={12} m={12} l={12} xl={12}>
                        <a href='https://www.youtube.com/watch?v=z3WamsCDth4&feature=youtu.be' target='_blank'>
                            <img className='responsive-img' src={path_classroom_img}/>
                        </a>
                    </Col>
                </RowStyled>

                <RowInfo
                    margin='80px 0'
                    img_path={path_img_15}
                    img_right={false}
                    title='Nosotros'
                    desc='El colegio Real Pacífico, con alto nivel de enseñanza y altas expectativas de rendimiento académico. Nuestros alumnos egresan preparados para aprobar el examen e ingresar a la universidad.'
                    />
            </Container>

            <ParallaxStyled
                image={<img alt="" src={path_img_13}/>}
                options={{responsiveThreshold: 0}}
                children={
                    <ParallaxBody>
                        <RowStyled>
                            <TitleSect color={COLOR.white}>Nuestra Propuesta</TitleSect>
                        </RowStyled>
                        <RowStyled>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                    ic_path={PathIcInitial} 
                                    ic_height='35px'
                                    ic_color={COLOR.white}
                                    title='Inicial' 
                                    title_size={SIZE.title}
                                    title_color={COLOR.white} 
                                    alignment='center'
                                    margin='30px 0px'>
                                </IconTexts>
                            </Col>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                    ic_path={PathIcNotebook} 
                                    ic_height='35px'
                                    ic_color={COLOR.white}
                                    title='Inicial' 
                                    title_size={SIZE.title}
                                    title_color={COLOR.white}
                                    alignment='center'
                                    margin='30px 0px'>
                                </IconTexts>
                            </Col>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                    ic_path={PathIcAtom} 
                                    ic_height='35px'
                                    ic_color={COLOR.white}
                                    title='Inicial' 
                                    title_size={SIZE.title}
                                    title_color={COLOR.white}
                                    alignment='center'
                                    margin='30px 0px'>
                                </IconTexts>
                            </Col>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                    ic_path={PathIcGraduation} 
                                    ic_height='35px'
                                    ic_color={COLOR.white}
                                    title='Inicial' 
                                    title_size={SIZE.title}
                                    title_color={COLOR.white}
                                    alignment='center'
                                    margin='30px 0px'>
                                </IconTexts>
                            </Col>
                        </RowStyled>
                    </ParallaxBody>
                }
            />

            <Container>
                <RowStyled>
                    <Col s={12} m={12} l={6} xl={6}>
                        <IconTexts 
                            ic_path={PathIcAtom} 
                            ic_height='60px'
                            ic_color={COLOR.primaryDark}
                            title='20'
                            suffix='+'
                            descs={['Años de Experiencia']} 
                            alignment='center'
                            margin='30px 0px'/>
                    </Col>

                    <Col s={12} m={12} l={6} xl={6}>
                        <IconTexts 
                            ic_path={PathIcHeart} 
                            ic_height='60px'
                            ic_color={COLOR.primaryDark}
                            title='1000'
                            descs={['Ingresantes a la universidad']} 
                            alignment='center'
                            margin='30px 0px'/>
                    </Col>
                </RowStyled>
            </Container>
            
        </div>
    );
}

export default BodyIndex;