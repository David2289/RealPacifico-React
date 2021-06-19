import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import Contact from '../../organism/contact/contact.jsx'

const BodyContact = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col><Contact/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default BodyContact;