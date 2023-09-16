import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div<{ direction: 'horizontal' | 'vertical' }>`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1, p {
        padding: 0;
        margin: 0;
    }

    ${(props) => props.direction === 'vertical' && 'text-align: center'}
`

const Title = Styled.h1<Omit<TextProps, 'title' | 'subTitle'>>`
    font-size: ${(props) => props.theme.fontSize.lg};
    color: ${(props) => props.theme.theme[props.type].title};
`

const SubTitle = Styled.p<Omit<TextProps, 'title' | 'subTitle'>>`
    font-size: ${(props) => props.theme.fontSize.base};
    color: ${(props) => props.theme.theme[props.type].sub};
`

type Theme = 'orange' | 'orange-reverse' | 'blue'

type TextProps = {
    title: string
    subTitle: string
    type: Theme
    direction?: 'horizontal' | 'vertical'
}

const Text = ({ title, subTitle, direction = 'horizontal', ...rest }: TextProps) => {
    return (
        <Wrapper direction={direction}>
            <Title {...rest}>{title}</Title>
            <SubTitle {...rest}>{subTitle}</SubTitle>
        </Wrapper>
    )
}

export default Text
