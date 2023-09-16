import Styled, { css } from 'styled-components'
import Circle from './Circle'
import Core from './Core'
import People from './People'
import { size } from './value'
import { createPeopleContainer } from './utils'

type CycleProps = {}

const Cycle = ({}: CycleProps) => {
    return (
        <Container>
            <CircleWrapper>
                <Circle divisor={size.large} />
            </CircleWrapper>
            <CircleWrapper>
                <Circle clockwise={false} divisor={size.medium} />
            </CircleWrapper>
            <CircleWrapper>
                <Core />
            </CircleWrapper>
            <div style={createPeopleContainer(size.small)}>
                <PersonWrapper divisor={12}>
                    <People src="img/people/person1.jpg" basedOn={size.small} divisor={12} duration={6} />
                </PersonWrapper>
            </div>
            <div style={createPeopleContainer(size.medium)}>
                <PersonWrapper divisor={16}>
                    <People src="img/people/person2.jpg" basedOn={size.medium} divisor={16} duration={8} />
                </PersonWrapper>
            </div>
            <PersonWrapper>
                <People src="img/people/person3.jpg" divisor={9} />
            </PersonWrapper>
        </Container>
    )
}

const Container = Styled.div<{ divisor?: number }>`
    position: absolute;
    height: calc(100vw / 1.5);
    margin-left: 30%;

    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        margin-left: 100%;
    }
`

const CircleWrapper = Styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const PersonWrapper = Styled.div<{ divisor?: number }>`
    position: absolute;
    top: ${(props) => css`calc(100vw / ${props.divisor} / 2)`};
    left: 50%;
    transform: translate(-50%, -50%);
`

export default Cycle
