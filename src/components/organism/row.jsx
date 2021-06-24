import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row as MatRow } from 'react-materialize';
import { SIZE } from '../../utils/constants.js'

const Row = styled(MatRow)`
    margin: ${props => props.margin ? props.margin : SIZE.row_margin};
`;

Row.propTypes = {
    margin: PropTypes.string
}

export default Row;