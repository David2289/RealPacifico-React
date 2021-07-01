import React from 'react';
import styled from 'styled-components';
import { LABEL, SCREEN_MEDIA } from '../../utils/constants.js';
import Row from '../organism/row.jsx';
import RowInfo from '../organism/rowinfo.jsx';
import Banner from '../organism/banner.jsx';

import PathImg4 from '../../images/img_4.jpg';

const BodyService = () => {
    return(
        <div>
            <Banner
                img_path={PathImg4}
                title={LABEL.service}/>
        </div>
    );
}

export default BodyService;