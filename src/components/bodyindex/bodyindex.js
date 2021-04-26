import styled from 'styled-components';

const SectOurProposal = styled.div`
    height: 420px;
    margin: 60px 0;

    // Cover and center background image: //
    background-position: 50% 50%; /*El cuadro ajustado se puede centrar horizontal y verticalmente*/
    background-size: cover; /*El cuadro de la imagen se ajusta a la dimensión más pequeña del div con el objetivo de cubrirla*/
    background-repeat: no-repeat;

    // To make the overlay: //
    position: relative;
    z-index: -1;

    &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        background: $secondary_color;
        opacity: 0.6;
    }
`;

export { SectOurProposal };