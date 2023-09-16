import Styled from 'styled-components'

type SectionProps = {
    direction?: 'vertical' | 'horizontal'
}

export const Wrapper = Styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    margin: auto;
`

const Section = Styled.div<SectionProps>`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;

    .content {
        height: 100%;
        display: flex;
        gap: 4rem;
        flex-direction: row;

        & > .text {
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 5rem;
            align-items: flex-start;
            justify-content: center;
        }

        @media (max-width: ${(props) => props.theme.windowSize['tablet']}px){
            flex-direction: column;

            & > .text {
                padding: 40px;
            }

            & > .first {
                margin-top: 200px;
            }
        }

        ${(props) => props.direction === 'vertical' && 'flex-direction: column'}
    }    

    .screen {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }
`

export default Section
