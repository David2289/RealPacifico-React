import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, SIZE } from '../../utils/constants.js';
import { LabelSailecBold, LabelSailecRegular } from '../atoms/label.jsx';


const Content = styled.div`
    margin: ${props => props.margin ? props.margin : '0 0'};
    padding: ${props => props.padding ? props.padding : '0 0'};
`;

const Icon = styled.img`
    height: ${props => props.height ? props.height : '35px'};
    display: block;
    margin: ${props => props.alignment && props.alignment == 'center' ? 'auto' : 'none'};
`;

const Title = styled(LabelSailecBold)`
    color: ${props => props.title_color ? props.title_color : COLOR.secondary};
    font-size: ${SIZE.headline};
    text-align: ${props => props.alignment ? props.alignment : 'left'};
    margin-top: 10px;
`;

const Description = styled(LabelSailecRegular)`
    color: ${props => props.desc_color ? props.desc_color : COLOR.secondary};
    font-size: ${SIZE.body};
    text-align: ${props => props.alignment ? props.alignment : 'left'};
`;


const IconTexts = (props) => {
    return (
        <Content margin={props.margin} padding={props.padding}>
            <Icon 
                src={props.ic_path} 
                height={props.ic_height}
                alignment={props.alignment}
                />
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
        </Content>
    );
}

IconTexts.propTypes = {
    ic_path: PropTypes.string.isRequired,
    ic_height: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    color: PropTypes.string,
    alignment: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
}

export default IconTexts;