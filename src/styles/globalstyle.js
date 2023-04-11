import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 1rem;
}

*, *::before, *::after {
  box-sizing: inherit;
}

button, input {
    font-family: inherit;
}

body {
  ${({ theme }) => css`
      background: ${theme.colors.primaryLightColor};
      font-family: ${theme.fonts.primaryFont};
      min-height: 100vh;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `}
}

`;