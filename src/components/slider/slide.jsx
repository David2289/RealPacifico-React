import React from 'react';
import PropTypes from 'prop-types';
import './slide.scss';



const Slide = (props) => {
    return (
        <div className='slide_content' style={{backgroundImage: `url(${props.bg_path})`}}>
            <p className='slide_title'>{props.title}</p>
            <p className='slide_description'>{props.description}</p>
        </div>
    );
}

Slide.propTypes = {
    bg_path: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default Slide;