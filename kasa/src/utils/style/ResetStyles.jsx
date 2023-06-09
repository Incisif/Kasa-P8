import { createGlobalStyle } from 'styled-components'

const ResetStyles = createGlobalStyle`
  
html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;

  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

export default ResetStyles
