import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: ${props => props.theme.colors.background} ${props =>
  props.theme.colors.background};
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
    background: ${props => props.theme.colors.background};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    border: 4px solid ${props => props.theme.colors.background};

    &:hover {
      background-color: #707070;
    }

    &:active {
      background-color: #909090;
    }
  }

  html{
    scroll-behavior: smooth;
    min-height: 100vh;
  }

  body{
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    min-height: 100vh;
    font-family: 'Space Grotesk', sans-serif;
  }
`
