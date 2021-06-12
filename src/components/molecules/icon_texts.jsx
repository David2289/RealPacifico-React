import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { COLOR, SIZE } from '../../utils/constants.js';
import { LabelSailecBold, LabelSailecRegular } from '../atoms/label.jsx';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Content = styled.div`
    margin: ${props => props.margin ? props.margin : '0 0'};
    padding: ${props => props.padding ? props.padding : '0 0'};
`;

const SVGStyled = styled(SVG)`
    height: ${props => props.height ? props.height : '35px'};
    fill: ${props => props.ic_color ? props.ic_color : COLOR.black};
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

function isNumeric(num) {
    return !isNaN(num)
}


const IconTexts = (props) => {
    
    const [state, setState] = useState(true);
    
    if (isNumeric(props.title)) {
        return (
            <Content margin={props.margin} padding={props.padding}>
                <SVGStyled 
                    src={props.ic_path}
                    height={props.ic_height}
                    ic_color={props.ic_color}
                    alignment={props.alignment}
                    />
                <CountUp 
                    start={0} 
                    end={parseInt(props.title)}
                    suffix={props.suffix}
                    redraw={true}
                    onEnd={() => {setState(false)}}
                    >
                    {({ countUpRef, start }) => (
                        <VisibilitySensor active={state} onChange={start} delayedCall>
                            {({isVisible}) => 
                                <Title 
                                ref={countUpRef}
                                title_color={props.color}
                                alignment={props.alignment} />
                            }
                        </VisibilitySensor>
                    )}
                </CountUp>
                <Description 
                    desc_color={props.color}
                    alignment={props.alignment}>
                    {props.desc}
                </Description>
            </Content>
        );
    }
    else {
        return (
            <Content margin={props.margin} padding={props.padding}>
                <SVGStyled 
                    src={props.ic_path}
                    height={props.ic_height}
                    ic_color={props.ic_color}
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
}

IconTexts.propTypes = {
    ic_path: PropTypes.string.isRequired,
    ic_height: PropTypes.string,
    ic_color: PropTypes.string,
    title: PropTypes.string,
    suffix: PropTypes.string,
    desc: PropTypes.string,
    color: PropTypes.string,
    alignment: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
}

export default IconTexts;