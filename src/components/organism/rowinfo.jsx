import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-materialize';
import { COLOR, SIZE } from '../../utils/constants.js';
import { LabelSailecBold, LabelSailecRegular } from '../atoms/label.jsx';
import Row from './row.jsx';
import TitleSect from '../atoms/titlesect.jsx';


const Content = styled.div`
    margin: 30px 0 0 25px;
`;

const Subtitle = styled(LabelSailecBold)`
    font-size: ${SIZE.title};
    color: ${COLOR.gray};
`;

const Description = styled(LabelSailecRegular)`
    margin: ${props => props.margin ? props.margin : '0 0'};
    color: ${COLOR.gray};
    font-size: ${SIZE.body};
`;

const RowInfo = (props) => {
    if(props.img_right == true) {
        return (
            <Row className='valign-wrapper' margin={props.margin} padding={props.padding}>
                <Col s={12} m={6}>
                    <Content>
                        <TitleSect>{props.title}</TitleSect>
                        <Description margin='30px 0px'>
                            {props.desc}
                        </Description>

                        <Subtitle>
                            {props.subtitle1}
                        </Subtitle>
                        <Description margin='10px 0px'>
                            {props.desc1}
                        </Description>

                        <Subtitle>
                            {props.subtitle2}
                        </Subtitle>
                        <Description margin='10px 0px'>
                            {props.desc2}
                        </Description>
                    </Content>
                </Col>
                <Col s={12} m={6}>
                    <img className='responsive-img' src={props.img_path}/>
                </Col>
            </Row>
        );
    } else {
        return (
            <Row className='valign-wrapper' margin={props.margin} padding={props.padding}>
                <Col s={12} m={6}>
                    <img className='responsive-img' src={props.img_path}/>
                </Col>
                <Col s={12} m={6}>
                    <Content>
                        <TitleSect>{props.title}</TitleSect>
                        <Description margin='30px 0px'>
                            {props.desc}
                        </Description>

                        <Subtitle>
                            {props.subtitle1}
                        </Subtitle>
                        <Description margin='10px 0px'>
                            {props.desc1}
                        </Description>

                        <Subtitle>
                            {props.subtitle2}
                        </Subtitle>
                        <Description margin='10px 0px'>
                            {props.desc2}
                        </Description>
                    </Content>
                </Col>
            </Row>
        );
    }
    
}

RowInfo.propTypes = {
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

export default RowInfo;