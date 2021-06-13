import React from 'react';
import Banner from '../../organism/banner/banner.jsx';
import styled from 'styled-components';
import { Container, Row, Col, Parallax } from 'react-materialize';
import { COLOR, LABEL } from '../../../utils/constants.js';
import TitleSect from '../../atoms/titlesect.jsx';
import RowInfo from '../../organism/rowinfo/rowinfo.jsx';
import Card from '../../molecules/card.jsx';

import PathImg4 from '../../../images/img_4.jpg';
import PathImg15 from '../../../images/img_15.jpg';

import PathIcAtom from '../../../icons/ic_atom.svg';
import PathIcHeart from '../../../icons/ic_heart.svg';
import PathIcStar from '../../../icons/ic_star.svg';
import IconTexts from '../../molecules/icon_texts.jsx';

const RowStyled = styled(Row)`
    margin: 80px 0; // default row margin
`;


const BodyUs = () => {
    return (
        <div>
            <Banner
                img_path={PathImg4}
                title={LABEL.us}/>

            <Container>
                <RowInfo
                        margin='80px 0'
                        img_path={PathImg15}
                        img_right={false}
                        title='Historia'
                        desc='Un estudiante egresa de la secundaria, postula a la universidad y no ingresa. Lo logra después de un año de preparación, como mínimo, en una academia preuniversitaria. Fue necesaria la creación de un gran colegio. El colegio Real Pacífico, con alto nivel de enseñanza y altas expectativas de rendimiento académico. Los alumnos egresan preparados para aprobar el examen e ingresar a la universidad.'
                        subtitle1='Misión'
                        desc1='Ser los responsables de dar una formación integral a cada uno de nuestros alumnos en las distintas etapas de su desarrollo.'
                        subtitle2='Visión'
                        desc2='Formar personas con alta calidad humana, con sólidos conocimientos académicos, con habilidades sociales y capaces de adaptarse a los cambios.'
                        />

                <RowStyled>
                    <TitleSect>Valores</TitleSect>
                    <Col s={12} m={6} l={4} xl={4}>
                        <Card
                            ic_path={PathIcHeart}
                            title='Amor al aprendizaje'
                            desc='Aprender a aprender. El aprendizaje es "acción", si no hay acción, es sólo información.'/>
                    </Col>
                    <Col s={12} m={6} l={4} xl={4}>
                        <Card
                            ic_path={PathIcStar}
                            title='Respeto'
                            desc='Aprenden a valorarse, reconocer y aceptar que somos diferentes, auténticos y legítimos.'/>
                    </Col>
                    <Col s={12} m={6} l={4} xl={4}>
                        <Card
                            ic_path={PathIcStar}
                            title='Respeto'
                            desc='Aprenden a valorarse, reconocer y aceptar que somos diferentes, auténticos y legítimos.'/>
                    </Col>
                </RowStyled>

                <RowStyled>
                    <Col s={12} m={6} l={6} xl={6}>
                        <IconTexts
                            ic_path={PathIcAtom}
                            ic_height='60px'
                            ic_color={COLOR.primaryDark}
                            title='20'
                            suffix='+'
                            desc='Años de experiencia'
                            alignment='center'/>
                    </Col>
                    <Col s={12} m={6} l={6} xl={6}>
                        <IconTexts
                            ic_path={PathIcHeart}
                            ic_height='60px'
                            ic_color={COLOR.primaryDark}
                            title='1000'
                            suffix='+'
                            desc='Ingresantes a la universidad'
                            alignment='center'/>
                    </Col>
                </RowStyled>

            </Container>

        </div>
    );
}

export default BodyUs;