import Styled from 'styled-components'

type SectionProps = {
    direction?: 'vertical' | 'horizontal'
}

export const Wrapper = Styled.div`
    max-width: 1500px;
    margin: auto;
    z-index: 10;
`

const Section = Styled.div<SectionProps>`
    height: 100%;

    .content {
        display: flex;
        height: 100%;
        align-items: center;

        ${(props) =>
            props.direction === 'horizontal' &&
            `
                flex-direction: row;

                & > div {
                    flex: 1 1 auto;
                    width: 0;
                }

                @media (max-width: ${props.theme.windowSize['tablet']}px) {
                    flex-direction: column;

                    & > div {
                        width: 100%;
                    }
                }
            `}

        ${(props) => props.direction === 'vertical' && 'flex-direction: column'}
    }    

    .screen {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
`

export default Section
