import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components'
import { LandingPage, Layout } from './containers'
import theme from './styles/theme'
import GlobalStyle from './GlobalStyle'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App
