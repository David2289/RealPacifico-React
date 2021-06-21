import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-materialize';
import { LABEL } from '../../../utils/constants.js';
import Banner from '../../organism/banner/banner.jsx';
import Path from '../../molecules/path.jsx';
import Contact from '../../organism/contact/contact.jsx'

import PathImg4 from '../../../images/img_4.jpg';

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
                <Row>
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
            </Container>
        </div>
    );
}

export default BodyContact;