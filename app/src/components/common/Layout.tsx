import React, { forwardRef } from 'react'
import Styled from 'styled-components'

const Container = Styled.div<{ ref: React.ForwardedRef<unknown> }>`
    height: calc(100vh + 100px);
    position: relative;
    overflow: hidden;
`

type LayoutProps = {
    children: React.ReactElement
    ref: (node?: Element | null | undefined) => void
}

const Layout = forwardRef(({ children }: LayoutProps, ref) => {
    return <Container ref={ref}>{children}</Container>
})

export default Layout
