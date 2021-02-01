import styled from 'styled-components';
import { COLOR, LabelBoldBodyBlack, LabelRegularBodyBlack } from '../commons/base.js';

const Icon = styled.img`
    height: '60px';
`;

const Title = styled(LabelBoldBodyBlack)`
    color: ${props => props.theme.color};
    text-align: ${props => props.theme.alignment};
`;

const Description = styled(LabelRegularBodyBlack)`
    color: ${props => props.theme.color};
    text-align: ${props => props.theme.alignment};
`;

Description.defaultProps = {
    theme: {
        color: COLOR.secondary,
        alignment: 'left'
    }
}

export {Icon, Title, Description};