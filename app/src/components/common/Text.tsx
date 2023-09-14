import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
`

const Title = Styled.h1`
    padding: 0;
    margin: 0;
    font-size: ${(props) => props.theme.fontSize.lg};
`

const SubTitle = Styled.p`
    padding: 0;
    margin: 0;
    font-size: ${(props) => props.theme.fontSize.base};
`

type TextProps = {
    title: string
    subTitle: string
}

const Text = ({ title, subTitle }: TextProps) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Wrapper>
    )
}

export default Text
