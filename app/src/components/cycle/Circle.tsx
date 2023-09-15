import Styled, { keyframes } from 'styled-components'

type CircleProps = {
    divisor?: number
    clockwise?: boolean
}

const Circle = ({ divisor = 2, clockwise = true }: CircleProps) => {
    return (
        <Container divisor={divisor}>
            <Wrapper clockwise={clockwise}>
                <Spinner />
            </Wrapper>
        </Container>
    )
}

const animation = {
    clockwise: keyframes`
    to {
        transform: rotate(365deg);
    }
  `,
    counterclockwise: keyframes`
    to {
        transform: rotate(0);
    }
  `,
}

const Container = Styled.div<Pick<CircleProps, 'divisor'>>`
    width: calc(100vw / ${(props) => props.divisor});
    height: calc(100vw / ${(props) => props.divisor});
`

const Wrapper = Styled.div<Pick<CircleProps, 'clockwise'>>`
    position: relative;
    height: 100%;
    animation: ${(props) => (props.clockwise ? '8s' : '3s')} ${animation.clockwise} infinite linear;
    border-radius: 50%;
    overflow: hidden;
`

const Spinner = Styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background: conic-gradient(
        from 90deg at 50% 50%,
        #FF7D39 100deg,
        #FF9B4E 180deg,
        #FF9B4E 360deg
    );
    border-radius: 56px;

    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: calc(100% - 20%);
        width: calc(100% - 20%);
        background: ${(props) => props.theme.color['orange03']};
        border-radius: 50%;
    }

    &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: calc((100% - 80%) / 2);
        width: calc((100% - 80%) / 2);
        background: #FF9B4E;
        border-radius: 50%;
    }
`

export default Circle
