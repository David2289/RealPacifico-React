import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants.js';
import { LabelSailecBold, LabelSailecRegular } from '../atoms/label.jsx';


const Icon = styled.img`
    height: '60px';
`;

const Title = styled(LabelSailecBold)`
    color: ${props => props.title_color ? props.title_color : COLOR.secondary};
    font-size: ${SIZE.body};
    text-align: ${props => props.alignment ? props.alignment : 'left'};
`;

const Description = styled(LabelSailecRegular)`
    color: ${props => props.desc_color ? props.desc_color : COLOR.secondary};
    font-size: ${SIZE.body};
    text-align: ${props => props.alignment ? props.alignment : 'left'};
`;


const IconTexts = (props) => {
    return (
        <div>
            <Icon src={props.ic_path}/>
            <Title 
                title_color={props.color}
                alignment={props.alignment}>
                    {props.title}
            </Title>
            <Description 
                desc_color={props.color}
                alignment={props.alignment}>
                {props.desc}
            </Description>
        </div>
    );
}

IconTexts.propTypes = {
    ic_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    color: PropTypes.string,
    alignment: PropTypes.string
}

export default IconTexts;