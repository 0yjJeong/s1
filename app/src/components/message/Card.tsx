import Styled from 'styled-components';
import { Quotes } from './resources';
import { CircleImage } from '../common';

const Block = Styled.div`
    background: ${props => props.theme.color['white']};
    border-radius: 20px;
    box-shadow: 0px 4px 14px 0px rgba(23, 42, 90, 0.10);

    padding: 40px;
    margin-right: 30px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

const Header = Styled.div`
    display: flex;
    width: 20%;
`

const Body = Styled.div`
    h3, p {
        margin: 0;
    }

    h3 {
        font-size: ${props => props.theme.fontSize['md']};
        height: calc(${props => props.theme.fontSize['base']} * 4);
    }

    p {
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: ${props => props.theme.fontSize['base']};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
`

const Footer = Styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    p {
        margin: 0;
        font-size: ${props => props.theme.fontSize['sm']};
    }
`

type CardProps = {
    title: string,
    description: string,
    image: string,
    writer: string,
    category: string
}

const Card = ({
    title, 
    description,
    image,
    writer,
    category
} :CardProps) => {
    return (
        <Block>
            <div>
                <Header>
                    <Quotes />
                </Header>
                <Body>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Body>
                <Footer>
                    <CircleImage src={image}/>
                    <div className='profile'>
                        <p>{writer}</p>
                        <p>{category}</p>
                    </div>
                </Footer>
            </div>
        </Block>
    )
}

export default Card;