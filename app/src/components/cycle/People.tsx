import Styled, { keyframes, css } from 'styled-components'
import { size } from './value'

type PeopleProps = {
    src: string
    basedOn?: number
    divisor?: number
    duration?: number
    delay?: number
}

function People({ src, basedOn = size.large, divisor = 10, duration = 10, delay = 0 }: PeopleProps) {
    return (
        <Container src={src} basedOn={basedOn} divisor={divisor} duration={duration} delay={delay}>
            <div className="image">
                <span></span>
            </div>
        </Container>
    )
}

const spin = keyframes`
  to { transform: rotate(1turn); }
`

const Container = Styled.div<PeopleProps>`
  .image {
    ${(props) => css`
        width: calc(100vw / ${props.divisor});
        height: calc(100vw / ${props.divisor});
        animation: ${spin} ${props.duration}s infinite linear;
        animation-delay: ${props.delay}s;
        transform-origin: 50% calc(100vw / ${props.basedOn} / 2);
    `}

    z-index: 10;

    span {
      display: inline-block;
      background-image: url(${(props) => props.src});
      background-size: cover;
      background-position: center;

      filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10));

      border: 0.4rem solid #fff;
      border-radius: 50%;
      
      width: 100%;
      height: 100%;

      animation: inherit;
      animation-direction: reverse;
    }
  }
`

export default People
