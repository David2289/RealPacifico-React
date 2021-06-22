import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE, SCREEN_MEDIA } from '../../utils/constants.js';
import IconTexts from './icon_texts.jsx';


const Containter = styled.div`
    height: 340px;
    border: 1px solid ${COLOR.grayClear};
    padding: 20px;
    margin-top: 30px;

    box-shadow: 0 1px 2px rgba(0,0,0,0.02), 
                0 2px 4px rgba(0,0,0,0.02), 
                0 4px 8px rgba(0,0,0,0.02), 
                0 8px 16px rgba(0,0,0,0.02),
                0 16px 32px rgba(0,0,0,0.02);

    @media only screen and ${SCREEN_MEDIA.small} {
        height: 340px;
    }
    @media only screen and ${SCREEN_MEDIA.medium} {
        height: 520px;
    }
    @media only screen and ${SCREEN_MEDIA.long} {
        height: 370px;
    }
`;


const Card = (props) => {
    return (
        <Containter>
            <IconTexts
                ic_path={props.ic_path}
                ic_color={COLOR.primaryDark}
                ic_height='25px'
                title={props.title}
                title_size={SIZE.subtitle}
                desc={props.desc}
                desc_color={COLOR.gray}
                separation='15px' />
        </Containter>
    );
}

Card.propTypes = {
    ic_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default Card;