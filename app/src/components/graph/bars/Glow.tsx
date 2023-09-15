import Styled from 'styled-components';
import { Block as Outer, Label, BaseBarProps } from './Base'

const Inner = Styled.div`
    filter: blur(10px);
    margin: 5px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 1000px;
    background: rgb(255,101,1);
    background: linear-gradient(0deg, rgba(255,101,1,1) 0%, rgba(255,182,105,1) 98%);
`

interface GlowProps extends BaseBarProps {

}

export default function Glow ({ ...rest }: GlowProps) {
    return (
        <Outer {...rest}>
            <Inner />
            <Label>
                <h3>에스원</h3>
                <p>53.2%</p>
            </Label>
        </Outer>
    )
}