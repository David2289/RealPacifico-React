import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants.js';
import IconTexts from './icon_texts.jsx';


const Containter = styled.div`
    height: 100%;
    border: 1px solid ${COLOR.grayClear};
    padding: 20px 20px 40px 20px;

    box-shadow: 0 1px 2px rgba(0,0,0,0.02), 
                0 2px 4px rgba(0,0,0,0.02), 
                0 4px 8px rgba(0,0,0,0.02), 
                0 8px 16px rgba(0,0,0,0.02),
                0 16px 32px rgba(0,0,0,0.02);
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
                descs={props.descs}
                desc_color={COLOR.gray}
                alignment={props.alignment}
                separation={props.separation} />
        </Containter>
    );
}

Card.propTypes = {
    ic_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    descs: PropTypes.arrayOf(string),
    alignment: PropTypes.string,
    separation: PropTypes.string
}

export default Card;