import Styled from 'styled-components'

const Core = Styled.div`
    width: calc(100vw / 6);
    height: calc(100vw / 6);
    background: #fff;
    border-radius: 50%;

    fill: #FFF;
    background-blend-mode: hard-light;
    filter: drop-shadow(0px 0px 50px #FFBD65);

    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        width: calc(100vw / 10);
        height: calc(100vw / 10);
    }
`

export default Core
