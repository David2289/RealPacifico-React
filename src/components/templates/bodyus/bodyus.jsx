import React from 'react';
import Banner from '../../organism/banner/banner.jsx';
import styled from 'styled-components';
import { Container, Row, Col, Parallax } from 'react-materialize';
import { LABEL } from '../../../utils/constants.js';

import PathImg4 from '../../../images/img_4.jpg';

const BodyUs = () => {
    return (
        <div>
            <Banner
                img_path={PathImg4}
                title={LABEL.contact}/>
        </div>
    );
}

export default BodyUs;