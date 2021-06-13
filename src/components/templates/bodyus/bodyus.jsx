import React from 'react';
import Banner from '../../organism/banner/banner.jsx';
import styled from 'styled-components';
import { Container, Row, Col, Parallax } from 'react-materialize';
import { LABEL } from '../../../utils/constants.js';
import RowInfo from '../../organism/rowinfo/rowinfo.jsx';

import PathImg4 from '../../../images/img_4.jpg';
import PathImg15 from '../../../images/img_15.jpg';

const ContainerStyled = styled(Container)`
    // width: 95%
`;

const BodyUs = () => {
    return (
        <div>
            <Banner
                img_path={PathImg4}
                title={LABEL.contact}/>

            <ContainerStyled>
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
            </ContainerStyled>
        </div>
    );
}

export default BodyUs;