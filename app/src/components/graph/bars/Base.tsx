import Styled, { keyframes } from 'styled-components'

const bottomToTop = (toTop: number) => keyframes`
    0% {
        top: 100%;
        opacity: 0;
    }
    1% {
        opacity: 1;
    }
    100% {
        top: ${toTop}%;
    }
`

export const Block = Styled.div<Pick<BaseBarProps, 'to'>>`
    background: rgb(255,182,105);
    background: linear-gradient(0deg, rgba(255,182,105,1) 0%, rgba(255,101,1,1) 98%);

    position: absolute;
    top: 0%;
    bottom: 0;
    left: 10px;
    right: 10px;
    border-radius: 1000px;

    animation: ${(props) => bottomToTop(props.to)} 1s ease-in-out both;
    animation-delay: 1s;
`

export const Label = Styled.div`
    text-align: center;
    position: absolute;
    top: -50px;
    left: 50%;
    right: 50%;
    width: 100%;
    transform: translate(-50%, -50%);

    h3, p {
        margin: 0;
        white-space: nowrap;
        color: ${(props) => props.theme.color['orange03']};
    }

    h3 {
        font-size: ${(props) => props.theme.fontSize['md']};
    }
`

export type BaseBarProps = {
    to: number
    name: string
    percentage: number
}

export default function Base({ to, name, percentage }: BaseBarProps) {
    return (
        <Block to={to}>
            <Label>
                <h3>{name}</h3>
                <p>{percentage}%</p>
            </Label>
        </Block>
    )
}
