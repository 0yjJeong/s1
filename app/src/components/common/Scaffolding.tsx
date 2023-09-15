import Styled from 'styled-components'

type ScaffoldingProps = {
    foreground: string
    background: string
}

const Scaffolding = Styled.div<ScaffoldingProps>`
    ${(props) => {
        return `
            background: ${props.background};
            height: 30px;

            &:after {
                content: "";
                background: ${props.foreground};
                width: 100%;
                height: inherit;
                position: absolute;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
            }
        `
    }}
`

export default Scaffolding
