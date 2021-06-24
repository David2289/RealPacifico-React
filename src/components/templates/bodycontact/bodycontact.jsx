import React from 'react';
import styled from 'styled-components';
import { Container, Col } from 'react-materialize';
import { LABEL } from '../../../utils/constants.js';
import Row from '../../organism/row.jsx';
import Card from '../../molecules/card.jsx';
import Banner from '../../organism/banner.jsx';
import Path from '../../molecules/path.jsx';
import Contact from '../../organism/contact.jsx'

import PathImg4 from '../../../images/img_4.jpg';
import PathIcPhone from '../../../icons/ic_phone.svg';
import PathIcGps from '../../../icons/ic_gps.svg';
import PathIcMail from '../../../icons/ic_mail.svg';

const MapContent = styled.div`
    position: relative;
    width: 100%;
    height: 470px;
    > iframe {
        width: 100%;
        height: 100%;
        border: none;
        margin: 0px 0;
      }
`;

const BodyContact = () => {
    return (
        <div>
            <Banner
                img_path={PathImg4}
                title={LABEL.contact}/>

            <Container>
                <Row
                    margin='0 0'>
                    <Path 
                        endpoint={LABEL.contact}
                        margin='20px 0' />
                </Row>
                <Row>
                    <Col s={12} m={12} l={12} xl={6}>
                        <Contact/>
                    </Col>
                    <Col s={12} m={12} l={12} xl={6}>
                        <MapContent>
                            <iframe src="https://maps.google.com/maps?q=Avenida%20pac%C3%ADfico%20578%2C%20Nuevo%20Chimbote%2C%20Per%C3%BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen/>
                        </MapContent>
                        
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={12} l={4} xl={4}>
                        <Card
                            ic_path={PathIcPhone}
                            title='Teléfonos'
                            title_separation='15px'
                            descs={['952904890', '952904890', '902308286']}
                            alignment='center'
                            />
                    </Col>
                    <Col s={12} m={12} l={4} xl={4}>
                        <Card
                            ic_path={PathIcGps}
                            title='Dirección'
                            title_separation='15px'
                            descs={['URB. JOSE CARLOS MARIATEGUI MZ R3', 'LOTE 20(2DO NIVEL). OVALO LA FAMILIA.', 'NUEVO CHIMBOTE']}
                            alignment='center'
                            />
                    </Col>
                    <Col s={12} m={12} l={4} xl={4}>
                        <Card
                            ic_path={PathIcMail}
                            title='Correos'
                            title_separation='15px'
                            descs={['043-310640', '952904890', '902308286']}
                            alignment='center'
                            />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BodyContact;