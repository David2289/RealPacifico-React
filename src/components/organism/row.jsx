import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row as MatRow } from 'react-materialize';

const Row = styled(MatRow)`
    margin: ${props => props.margin ? props.margin : '100px 0'};
`;

Row.propTypes = {
    margin: PropTypes.string
}

export default Row;