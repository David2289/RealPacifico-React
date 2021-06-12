import React from 'react';
import ReactDOM from 'react-dom';
import Banner from '../../organism/banner/banner.jsx';

import PathImg4 from '../../../images/img_4.jpg';

const BodyUs = () => {
    return (
        <div>
            <Banner
                img_path={PathImg4}/>
        </div>
    );
}

export default BodyUs;