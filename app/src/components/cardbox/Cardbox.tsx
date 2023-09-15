import Styled from 'styled-components'
import * as resource from './resource'
import Card from './Card'
import Shadow from './Shadow'
import { values } from '../../lib'

type CardboxProps = {
    currentIndex: number
}

const Cardbox = ({ currentIndex }: CardboxProps) => {
    return (
        <Block>
            <Shadow />
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

    max-width: 500px;
    max-height: 500px;
    min-width: 330px;
    min-height: 330px;
`

const Cards = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Board = Styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 20;
`

const Pocket = Styled.div`
    position: absolute;
    width: 100%;
    bottom: -5px;
    z-index: 100;

    & > div {
        position: absolute;
        bottom: 0;
        padding: 4rem;

        @media (max-width: 1250px) {
            padding: 3rem;
        }

        h2, P {
            margin: 0;
            padding: 0;
        }

        h2 {
            font-size: ${(props) => props.theme.fontSize.md};
            color: ${(props) => props.theme.color['white']};

            @media (max-width: 1250px) {
                font-size: ${(props) => props.theme.fontSize.base};
            }
        }

        p {
            font-size: ${(props) => props.theme.fontSize.sm};
            color: ${(props) => props.theme.color['blue00']};

            @media (max-width: 1250px) {
                font-size: ${(props) => props.theme.fontSize.xs};
            }
        }
    }
`

export default Cardbox
