import Styled from 'styled-components'
import * as resource from './resource'
import Card from './Card'
import { values } from '../../lib'

type CardboxProps = {
    currentIndex: number
}

const Cardbox = ({ currentIndex }: CardboxProps) => {
    return (
        <Block>
            <Board>
                <resource.Board />
            </Board>
            <Cards>
                {values.cards.map((card, index) => (
                    <Card key={card.category} index={index} icon={card.icon} category={card.category} />
                ))}
            </Cards>
            <Pocket>
                <resource.Pocket />
                <div>
                    <h2>{values.cards[currentIndex].title}</h2>
                    <p>{values.cards[currentIndex].description}</p>
                </div>
            </Pocket>
        </Block>
    )
}

const Block = Styled.div`
    position: relative;
    width: calc(100vw * 0.3);
    height: calc(100vw * 0.3);
    margin: auto;
`

const Cards = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Board = Styled.div`
    width: 100%;
    height: 100%;
`

const Pocket = Styled.div`
    position: absolute;
    width: 100%;
    bottom: -5px;
    z-index: 10;

    & > div {
        position: absolute;
        bottom: 0;
        padding: 4rem;

        h2, P {
            margin: 0;
            padding: 0;
        }

        h2 {
            font-size: ${(props) => props.theme.fontSize.base};
        }
    }
`

export default Cardbox
