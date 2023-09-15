import React from 'react'
import Styled from 'styled-components'

const Button = Styled.button`
    background: ${(props) => props.theme.color['darkGray']};
    border: 1px solid ${(props) => props.theme.color['darkGray']};
    box-sizing: border-box;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: ${(props) => props.theme.fontSize['base']};
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: ${(props) => props.theme.color['orange03']};
        border: 1px solid ${(props) => props.theme.color['orange00']};
    }
`

export default Button
