import Styled from 'styled-components'

const Markets = Styled.div`
    display: flex;
    gap: 2rem;
    
    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        width: 100%;
        justify-content: space-between;
    }
`

export default Markets
