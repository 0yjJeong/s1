import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box; 
    }

    html {
        font-family: 'Noto Sans KR', sans-serif;
    }

    html, body {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
