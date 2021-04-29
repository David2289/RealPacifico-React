import styled from 'styled-components';
import { COLOR, SIZE } from './constants.js';


const LabelRegular = styled.p`
    font-family: 'sailecregular'
`;

const LabelBold = styled.p`
    font-family: 'sailecbold'
`;

const LabelMedium = styled.p`
    font-family: 'sailecmedium'
`;

const LabelLight = styled.p`
    font-family: 'saileclight'
`;



// #region *** LABEL REGULAR TITLE ***

const LabelRegularTitle = styled(LabelRegular)`
    font-size: ${SIZE.title};
`;

const LabelRegularTitlePrimary = styled(LabelRegularTitle)`
    color: ${COLOR.primary};
`;

const LabelRegularTitlePrimaryDark = styled(LabelRegularTitle)`
    color: ${COLOR.primaryDark};
`;

const LabelRegularTitleSecondary = styled(LabelRegularTitle)`
    color: ${COLOR.secondary};
`;

const LabelRegularTitleWhite = styled(LabelRegularTitle)`
    color: ${COLOR.white};
`;

const LabelRegularTitleBlack = styled(LabelRegularTitle)`
    color: ${COLOR.black};
`;

const LabelRegularTitleGray = styled(LabelRegularTitle)`
    color: ${COLOR.gray};
`;

// #endregion

// #region *** LABEL REGULAR SUBTITLE ***

const LabelRegularSubtitle = styled(LabelRegular)`
    font-size: ${SIZE.subtitle};
`;

const LabelRegularSubtitlePrimary = styled(LabelRegularSubtitle)`
    color: ${COLOR.primary};
`;

const LabelRegularSubtitlePrimaryDark = styled(LabelRegularSubtitle)`
    color: ${COLOR.primaryDark};
`;

const LabelRegularSubtitleSecondary = styled(LabelRegularSubtitle)`
    color: ${COLOR.secondary};
`;

const LabelRegularSubtitleWhite = styled(LabelRegularSubtitle)`
    color: ${COLOR.white};
`;

const LabelRegularSubtitleBlack = styled(LabelRegularSubtitle)`
    color: ${COLOR.black};
`;

const LabelRegularSubtitleGray = styled(LabelRegularSubtitle)`
    color: ${COLOR.gray};
`;

// #endregion

// #region *** LABEL REGULAR BODY ***

const LabelRegularBody = styled(LabelRegular)`
    font-size: ${SIZE.body};
`;

const LabelRegularBodyPrimary = styled(LabelRegularBody)`
    color: ${COLOR.primary};
`;

const LabelRegularBodyPrimaryDark = styled(LabelRegularBody)`
    color: ${COLOR.primaryDark};
`;

const LabelRegularBodySecondary = styled(LabelRegularBody)`
    color: ${COLOR.secondary};
`;

const LabelRegularBodyWhite = styled(LabelRegularBody)`
    color: ${COLOR.white};
`;

const LabelRegularBodyBlack = styled(LabelRegularBody)`
    color: ${COLOR.black};
`;

const LabelRegularBodyGray = styled(LabelRegularBody)`
    color: ${COLOR.gray};
`;

// #endregion

// #region *** LABEL REGULAR FOOTER ***

const LabelRegularFooter = styled(LabelRegular)`
    font-size: ${SIZE.caption};
`;

const LabelRegularFooterWhite = styled(LabelRegularFooter)`
    color: ${COLOR.white};
`;

const LabelRegularFooterBlack = styled(LabelRegularFooter)`
    color: ${COLOR.black};
`;

const LabelRegularFooterGold = styled(LabelRegularFooter)`
    color: ${COLOR.primaryDark};
`;

// #endregion




// #region *** LABEL BOLD TITLE ***

const LabelBoldTitle = styled(LabelBold)`
    font-size: ${SIZE.title};
`;

const LabelBoldTitleWhite = styled(LabelBoldTitle)`
    color: ${COLOR.white};
`;

const LabelBoldTitleBlack = styled(LabelBoldTitle)`
    color: ${COLOR.black};
`;

const LabelBoldTitleGold = styled(LabelBoldTitle)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL BOLD SUBTITLE ***

const LabelBoldSubtitle = styled(LabelBold)`
    font-size: ${SIZE.subtitle};
`;

const LabelBoldSubtitleWhite = styled(LabelBoldSubtitle)`
    color: ${COLOR.white};
`;

const LabelBoldSubtitleBlack = styled(LabelBoldSubtitle)`
    color: ${COLOR.black};
`;

const LabelBoldSubtitleGold = styled(LabelBoldSubtitle)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL BOLD BODY ***

const LabelBoldBody = styled(LabelBold)`
    font-size: ${SIZE.body};
`;

const LabelBoldBodyWhite = styled(LabelBoldBody)`
    color: ${COLOR.white};
`;

const LabelBoldBodyBlack = styled(LabelBoldBody)`
    color: ${COLOR.black};
`;

const LabelBoldBodyGold = styled(LabelBoldBody)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL BOLD FOOTER ***

const LabelBoldFooter = styled(LabelBold)`
    font-size: ${SIZE.caption};
`;

const LabelBoldFooterWhite = styled(LabelBoldFooter)`
    color: ${COLOR.white};
`;

const LabelBoldFooterBlack = styled(LabelBoldFooter)`
    color: ${COLOR.black};
`;

const LabelBoldFooterGold = styled(LabelBoldFooter)`
    color: ${COLOR.primaryDark};
`;

// #endregion




// #region *** LABEL MEDIUM TITLE ***

const LabelMediumTitle = styled(LabelMedium)`
    font-size: ${SIZE.title};
`;

const LabelMediumTitleWhite = styled(LabelMediumTitle)`
    color: ${COLOR.white};
`;

const LabelMediumTitleBlack = styled(LabelMediumTitle)`
    color: ${COLOR.black};
`;

const LabelMediumTitleGold = styled(LabelMediumTitle)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL MEDIUM SUBTITLE ***

const LabelMediumSubtitle = styled(LabelMedium)`
    font-size: ${SIZE.subtitle};
`;

const LabelMediumSubtitleWhite = styled(LabelMediumSubtitle)`
    color: ${COLOR.white};
`;

const LabelMediumSubtitleBlack = styled(LabelMediumSubtitle)`
    color: ${COLOR.black};
`;

const LabelMediumSubtitleGold = styled(LabelMediumSubtitle)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL MEDIUM BODY ***

const LabelMediumBody = styled(LabelMedium)`
    font-size: ${SIZE.body};
`;

const LabelMediumBodyWhite = styled(LabelMediumBody)`
    color: ${COLOR.white};
`;

const LabelMediumBodyBlack = styled(LabelMediumBody)`
    color: ${COLOR.black};
`;

const LabelMediumBodyGold = styled(LabelMediumBody)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL MEDIUM FOOTER ***

const LabelMediumFooter = styled(LabelMedium)`
    font-size: ${SIZE.caption};
`;

const LabelMediumFooterWhite = styled(LabelMediumFooter)`
    color: ${COLOR.white};
`;

const LabelMediumFooterBlack = styled(LabelMediumFooter)`
    color: ${COLOR.black};
`;

const LabelMediumFooterGold = styled(LabelMediumFooter)`
    color: ${COLOR.primaryDark};
`;

// #endregion




// #region *** LABEL LIGHT TITLE ***

const LabelLightTitle = styled(LabelLight)`
    font-size: ${SIZE.title};
`;

const LabelLightTitleWhite = styled(LabelLightTitle)`
    color: ${COLOR.white};
`;

const LabelLightTitleBlack = styled(LabelLightTitle)`
    color: ${COLOR.black};
`;

const LabelLightTitleGold = styled(LabelLightTitle)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL LIGHT SUBTITLE ***

const LabelLightSubtitle = styled(LabelLight)`
    font-size: ${SIZE.subtitle};
`;

const LabelLightSubtitleWhite = styled(LabelLightSubtitle)`
    color: ${COLOR.white};
`;

const LabelLightSubtitleBlack = styled(LabelLightSubtitle)`
    color: ${COLOR.black};
`;

const LabelLightSubtitleGold = styled(LabelLightSubtitle)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL LIGHT BODY ***

const LabelLightBody = styled(LabelLight)`
    font-size: ${SIZE.body};
`;

const LabelLightBodyWhite = styled(LabelLightBody)`
    color: ${COLOR.white};
`;

const LabelLightBodyBlack = styled(LabelLightBody)`
    color: ${COLOR.black};
`;

const LabelLightBodyGold = styled(LabelLightBody)`
    color: ${COLOR.primaryDark};
`;

// #endregion

// #region *** LABEL LIGHT FOOTER ***

const LabelLightFooter = styled(LabelLight)`
    font-size: ${SIZE.caption};
`;

const LabelLightFooterWhite = styled(LabelLightFooter)`
    color: ${COLOR.white};
`;

const LabelLightFooterBlack = styled(LabelLightFooter)`
    color: ${COLOR.black};
`;

const LabelLightFooterGold = styled(LabelLightFooter)`
    color: ${COLOR.primaryDark};
`;

// #endregion




export { 
    LabelRegular, 

    LabelRegularTitlePrimary,
    LabelRegularTitlePrimaryDark,
    LabelRegularTitleSecondary,
    LabelRegularTitleWhite, 
    LabelRegularTitleBlack,
    LabelRegularTitleGray,

    LabelRegularSubtitlePrimary,
    LabelRegularSubtitlePrimaryDark,
    LabelRegularSubtitleSecondary,
    LabelRegularSubtitleWhite,
    LabelRegularSubtitleBlack,
    LabelRegularSubtitleGray,

    LabelRegularBodyPrimary,
    LabelRegularBodyPrimaryDark,
    LabelRegularBodySecondary,
    LabelRegularBodyWhite,
    LabelRegularBodyBlack,
    LabelRegularBodyGray,

    LabelRegularFooterWhite,
    LabelRegularFooterBlack,
    LabelRegularFooterGold,

    LabelBold,
    
    LabelBoldTitleWhite,
    LabelBoldTitleBlack,
    LabelBoldTitleGold,

    LabelBoldSubtitleWhite,
    LabelBoldSubtitleBlack,
    LabelBoldSubtitleGold,

    LabelBoldBodyWhite,
    LabelBoldBodyBlack,
    LabelBoldBodyGold,

    LabelBoldFooterWhite,
    LabelBoldFooterBlack,
    LabelBoldFooterGold,

    LabelMediumTitleWhite,
    LabelMediumTitleBlack,
    LabelMediumTitleGold,

    LabelMediumSubtitleWhite,
    LabelMediumSubtitleBlack,
    LabelMediumSubtitleGold,
    
    LabelMediumBodyWhite,
    LabelMediumBodyBlack,
    LabelMediumBodyGold,

    LabelMediumFooterWhite,
    LabelMediumFooterBlack,
    LabelMediumFooterGold,

    LabelLightTitleWhite,
    LabelLightTitleBlack,
    LabelLightTitleGold,

    LabelLightSubtitleWhite,
    LabelLightSubtitleBlack,
    LabelLightSubtitleGold,

    LabelLightBodyWhite,
    LabelLightBodyBlack,
    LabelLightBodyGold,

    LabelLightFooterWhite,
    LabelLightFooterBlack,
    LabelLightFooterGold
};

