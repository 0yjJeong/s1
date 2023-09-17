import Styled from 'styled-components'

type MarketProps = {
    icon: string
    text: string
    store: string
}

const Block = Styled.button`
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid ${(props) => props.theme.color['darkGray']};
    background: ${(props) => props.theme.color['darkGray']};
    padding: 10px;
    border-radius: 10px;
    transition: background 0.2s;

    &:hover {
        background: ${(props) => props.theme.color['orange03']};
        border: 1px solid white;
    }
`

const Left = Styled.div`
    display: flex;
`

const Right = Styled.div`
    display: flex;
    gap: 7px;
    flex-direction: column;
    align-items: flex-start;

    img:first-child {
        height: 12px;
        display: inherit;
    }
`

const Market = ({ icon, text, store }: MarketProps) => {
    return (
        <Block>
            <Left>
                <img src={icon} />
            </Left>
            <Right>
                <img src={text} />
                <img src={store} />
            </Right>
        </Block>
    )
}

export default Market
