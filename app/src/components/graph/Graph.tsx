import Styled from 'styled-components'
import * as bars from './bars'
import Line from './Line'

type GraphProps = {}

const Graph = ({}: GraphProps) => {
    return (
        <Positioner>
            <Line />
            <Bars>
                <div>
                    <bars.Glow to={20} name="에스원" percentage={52} />
                </div>
                <div>
                    <bars.Base to={60} name="A사" percentage={35.8} />
                </div>
                <div>
                    <bars.Base to={85} name="B사" percentage={8.8} />
                </div>
            </Bars>
        </Positioner>
    )
}

const Positioner = Styled.div`
    height: 100vh;
    position: relative;

    @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
        height: 100%;
    }
`

const Bars = Styled.div`
    display: flex;
    gap: 4rem;
    flex-direction: row;
    padding: 100px;
    height: 100%;

    & > div {
        flex: 1;
        position: relative;
        min-width: 80px;
    }
`

export default Graph
