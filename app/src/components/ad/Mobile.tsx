import Styled from 'styled-components'

const Container = Styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    .grid {
        width: 100%;
        position: absolute;
        top: -35%;

        &:after {
            content: "";
            padding-bottom: 100%;
            display: block;
            margin-bottom: 100%;
            background-image: url(resource/grid.png);
            background-size: contain;
        }
    }

    img {
        z-index: 10;
        width: 80%;
    }
`

type MobileProps = {}

const Mobile = ({}: MobileProps) => {
    return (
        <Container>
            <div className="grid"></div>
            <img src="img/frame.png" />
        </Container>
    )
}

export default Mobile
