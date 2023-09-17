import Styled from 'styled-components'
import { Section } from '../common'

const Block = Styled(Section)`
    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        .content {
            flex-direction: column-reverse;
        }
    }
`

export default Block
