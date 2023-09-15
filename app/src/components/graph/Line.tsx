import Styled from 'styled-components';

const Block = Styled.div`
    position: absolute;
    height: 1px;
    width: 100%;
    top: 34%;
    height: 4px;
    background-image: linear-gradient(90deg, transparent, transparent 50%, #fff 50%, #fff 100%), linear-gradient(91deg, rgba(255,182,105,0) 0%, rgba(255,101,1,1) 95%);
    background-size: 20px 3px, 100% 3px;
    border: none;

    span {
        position: absolute;
        display: inline-block;
        right: 3px;
        font-weight: bold;
        font-size: ${props => props.theme.fontSize['md']};
        
        background: linear-gradient(180deg, rgba(255,182,105,0) 30%, rgba(255,101,1,1) 95%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`;

const Line = () => {
    return (
        <Block>
            <span>50%</span>
        </Block>    
    )
}

export default Line;