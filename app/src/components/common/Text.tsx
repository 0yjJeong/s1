import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div<{ direction: 'horizontal' | 'vertical'; styles?: string }>`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1, p {
        padding: 0;
        margin: 0;
    }

    ${(props) => props.direction === 'vertical' && 'text-align: center'}

    ${(props) => props.styles}
`

const Title = Styled.h1<Omit<TextProps, 'title' | 'subTitle'>>`
    font-size: ${(props) => props.theme.fontSize.lg};
    color: ${(props) => props.theme.theme[props.type].title};

    @media (max-width: ${(props) => props.theme.windowSize['mobile']}px) {
        line-height: 1.2;
    }
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
    styles?: string
}

const Text = ({ title, subTitle, direction = 'horizontal', styles, ...rest }: TextProps) => {
    return (
        <Wrapper direction={direction} styles={styles}>
            <Title {...rest}>{title}</Title>
            <SubTitle {...rest}>{subTitle}</SubTitle>
        </Wrapper>
    )
}

export default Text
