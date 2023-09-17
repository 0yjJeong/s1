import Styled from 'styled-components'

const Message = Styled.div`
    position: relative;

    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 5px;
        background: rgb(255,182,105);
        background: linear-gradient(180deg, rgba(255,182,105,1) 17%, rgba(255,125,57,1) 17%);

        @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
            background: linear-gradient(180deg, rgba(255,182,105,1) 17%, rgba(255,255,255,.7) 17%);
        }
    }

    & > div {
        margin-left: 30px;

        @media (max-width: ${(props) => props.theme.windowSize['tablet']}px) {
            color: ${(props) => props.theme.color['orange00']};
        }
    }
`

export default Message
