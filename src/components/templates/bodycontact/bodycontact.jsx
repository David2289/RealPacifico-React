import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import Contact from '../../organism/contact/contact.jsx'

const BodyContact = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col s={12} m={12} l={6} xl={6}>
                        <Contact/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BodyContact;