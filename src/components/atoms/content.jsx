import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentStyled = styled.div`
    margin: ${props => props.margin ? props.margin : '0 0'};
    padding: ${props => props.padding ? props.padding : '0 0'};
`;

const Content = (props) => {
    return (
        <ContentStyled margin={props.margin} padding={props.padding}>
            {props.children}
        </ContentStyled>
    );
}

Content.propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string
}

export default Content;