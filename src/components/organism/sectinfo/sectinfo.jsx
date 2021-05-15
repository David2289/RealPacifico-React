import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-materialize';
import { COLOR, SCREEN_MEDIA } from '../../../utils/constants.js';
import Content from '../../atoms/content.jsx';
import TitleSect from '../../atoms/titlesect.jsx';
import Description from '../../atoms/description.jsx';

// It doesn't work:
const RowStyled = styled(Row)`
    margin: ${props => props.margin ? props.margin : '0 0'};
    padding: ${props => props.padding ? props.padding : '0 0'};
    @media only screen and ${SCREEN_MEDIA.small} {
        // When Row have valign-wrapper to center its content, the Grid break up and vertical alignment doesn't work.
        // To solve it. Is neceasary to use display inherit:
        .valign-wrapper {
            display: inline-flex;
        }
    }
`;

const SectInfo = (props) => {
    if(props.img_right == true) {
        return (
            <RowStyled margin={props.margin} padding={props.padding}>
                <Col s={12} m={6}>
                    <Content margin='30px 30px'>
                        <TitleSect>{props.title}</TitleSect>
                        <Description margin='30px 0px'>
                            {props.desc}
                        </Description>
                    </Content>
                </Col>
                <Col s={12} m={6}>
                    <img className='responsive-img' src={props.img_path}/>
                </Col>
            </RowStyled>
        );
    } else {
        return (
            <RowStyled margin={props.margin} padding={props.padding}>
                <Col s={12} m={6}>
                    <img className='responsive-img' src={props.img_path}/>
                </Col>
                <Col s={12} m={6}>
                    <Content margin='30px 30px'>
                        <TitleSect>{props.title}</TitleSect>
                        <Description margin='30px 0px'>
                            {props.desc}
                        </Description>
                    </Content>
                </Col>
            </RowStyled>
        );
    }
    
}

SectInfo.propTypes = {
    img_path: PropTypes.string.isRequired,
    img_right: PropTypes.bool,
    title: PropTypes.string,
    desc: PropTypes.string,
    subtitle1: PropTypes.string,
    desc1: PropTypes.string,
    subtitle2: PropTypes.string,
    desc2: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string
}

export default SectInfo;