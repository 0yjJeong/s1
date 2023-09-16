import Styled from 'styled-components';

type CircleImageProps = {
    src: string;
}

const CircleImage = Styled.div<CircleImageProps>`
    width: 34px;


    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;

        background-image: url(${props => props.src});
        background-size: cover;
        background-position: center;
        border-radius: 50%;
    }
`

export default CircleImage