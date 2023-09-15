import Styled from 'styled-components'

const Shadow = Styled.div`
    position: absolute;
    top: -50px;
    right: -50px;
    left: 50px;
    bottom: 50px;
    transform: rotate(23deg);
    background: ${(props) => props.theme.color['blue03']};
    border-radius: 50px;
`

export default Shadow
