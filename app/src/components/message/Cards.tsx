import Styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import Card from './Card'

import 'react-multi-carousel/lib/styles.css'
import './index.css'
import { values } from '../../lib'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30,
    },
}

const Positioner = Styled.div`
    position: absolute;
    top: 35%;
    right: 0;
    left: 0;
`

const Cards = () => {
    return (
        <Positioner>
            <Carousel draggable infinite responsive={responsive} dotListClass="dot-list-style">
                {values.messages.map((m) => (
                    <Card key={m.writer} {...m} />
                ))}
            </Carousel>
        </Positioner>
    )
}

export default Cards
