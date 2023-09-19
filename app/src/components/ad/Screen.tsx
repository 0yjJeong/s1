import Styled from 'styled-components'

const Screen = Styled.div`
    bottom: 30%;
    left: -30%;
    right: -30%;
    background: ${(props) => props.theme.color['orange00']};
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;

    @media (max-width: ${(props) => props.theme.windowSize['mobile']}px) {
        bottom: 10%;
    }
`

export default Screen
