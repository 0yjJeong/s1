import Styled, { keyframes } from 'styled-components'
import * as resource from './resource'

type CardProps = {
    index: number
    icon: string
    category: string
}

const Card = ({ index, icon, category }: CardProps) => {
    return (
        <Outer index={index}>
            <resource.Card />
            <Inner>
                <div>
                    <Left>
                        <img src={icon} />
                        <h1>{category}</h1>
                    </Left>
                    <Right>
                        <span>더보기</span>
                    </Right>
                </div>
            </Inner>
        </Outer>
    )
}

const flip = keyframes`
    0% {
        opacity: 100%;
        top: 0px;
    }
    90% {
        opacity: 80%;
        top: -100px;
    }
    100% {
        opacity: 0%;
        top: -100px;
    }
`

const Outer = Styled.li<{ index: number }>`
    position: absolute;
    width: 100%;
    bottom: -4px;
    // animation: ${flip} 2s ease-in-out
    ${(props) => (props.index + 1) * 8}s;
    animation-fill-mode: forwards;

    ${(props) => props.index === 5 && 'animation: none'};

    z-index: ${(props) => props.index * -1 + 10};
`

const Inner = Styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 4rem;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
`

const Left = Styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 20%;
    }

    h1 {
        padding: 0;
        margin: 0;
        font-size: ${(props) => props.theme.fontSize.base};
    }
`

const Right = Styled.div`
    padding: 0;
    margin: 0;
    font-size: ${(props) => props.theme.fontSize.xs};
    width: 100%;
    text-align: right;
`

export default Card
