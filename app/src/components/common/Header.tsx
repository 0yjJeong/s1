import React from 'react'
import { Outlet } from 'react-router-dom'
import Styled from 'styled-components'

const Container = Styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100px;
    z-index: 100;
`

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
    return (
        <div>
            <Container>Header</Container>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Header
