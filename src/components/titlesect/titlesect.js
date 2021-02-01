import styled from 'styled-components';
import { COLOR, SIZE, LabelBoldTitleBlack } from '../commons/base.js'

const TitleLabel = styled(LabelBoldTitleBlack)`
    font-size: ${props => props.theme.size};
    color: ${props => props.theme.color};
`;

TitleLabel.defaultProps = {
    theme: {
        size: SIZE.title,
        color: COLOR.secondary
    }
}

const TitleUnderline = styled.div`
    width: 90px;
    height: 4px;
    background-color: ${COLOR.primary};
    margin-top: 10px;
`;

export { TitleLabel, TitleUnderline };