import React from 'react';
import {Container, Row, Col, Parallax} from 'react-materialize';
import { COLOR } from '../commons/base.js';
import Slider from '../slider/slider.jsx'
import TitleSect from '../titlesect/titlesect.jsx';
import IconTexts from '../icontexts/icontexts.jsx';
import './bodyindex.scss'

const path_classroom_img = require('../../images/img_6.jpg');
const path_img_15 = require('../../images/img_15.jpg');
const path_img_13 = require('../../images/img_13.jpg');

const path_ic_initial = require('../../images/ic_initial.svg');
const path_ic_primary = require('../../images/ic_primary.svg');
const path_ic_highschool = require('../../images/ic_highschool.svg');
const path_ic_system5 = require('../../images/ic_system5.svg');

const BodyIndex = () => {
    return (
        <div>
            <Slider showBubble={true}></Slider>

            <Container>
                <Row>
                    <Col s={12} m={12} l={12} xl={12}>
                        <a href='https://www.youtube.com/watch?v=z3WamsCDth4&feature=youtu.be' target='_blank'>
                            <img className='responsive-img' src={path_classroom_img}/>
                        </a>
                    </Col>
                </Row>
                <Row className='valign-wrapper' >
                    <Col s={12} m={6}>
                        <img className='responsive-img' src={path_img_15}/>
                    </Col>
                    <Col s={12} m={6}>
                        <div>
                            <TitleSect title='Nosotros'></TitleSect>
                            <p className='margin_30_0'>
                                El colegio Real Pacífico, con alto nivel de enseñanza y altas expectativas de rendimiento académico. Nuestros alumnos egresan preparados para aprobar el examen e ingresar a la universidad.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Parallax
                className='section_ourproposal_bg'
                image={<img alt="" src={path_img_13}/>}
                options={{responsiveThreshold: 0}}
                children={
                    <Container className='section_ourproposal_content'>
                        <Row>
                            <TitleSect title='Nuestra Propuesta' color={COLOR.white}></TitleSect>
                        </Row>
                        <Row>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                ic_path={path_ic_initial} 
                                desc='Inicial' 
                                color={COLOR.white} 
                                centered={true}>
                                </IconTexts>
                            </Col>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                ic_path={path_ic_primary} 
                                desc='Primaria' 
                                color={COLOR.white} 
                                centered={true}>
                                </IconTexts>
                            </Col>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                ic_path={path_ic_highschool} 
                                desc='Secundaria' 
                                color={COLOR.white} 
                                centered={true}>
                                </IconTexts>
                            </Col>
                            <Col s={12} m={6} l={3} xl={3}>
                                <IconTexts 
                                ic_path={path_ic_system5} 
                                desc='Sistema 5º año' 
                                color={COLOR.white} 
                                centered={true}>
                                </IconTexts>
                            </Col>
                        </Row>
                    </Container>
                }
            />

            
        </div>
    );
}

export default BodyIndex;