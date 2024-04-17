import {ThemeProvider} from "../ThemeProvider";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = ({children}: any) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export const GlobalStyled = createGlobalStyle<{ themeObj: any }>`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  & {
    scrollbar-width: thin;
    scrollbar-color: ${({ themeObj }) => themeObj.colors.primary};
  }

  &::-webkit-scrollbar {
    width: 5px;
    border:${({ themeObj }) => themeObj.colors.accent}
    border-radius: 30px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: ${({ themeObj }) => themeObj.colors.primary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ themeObj }) => themeObj.colors.accent};
  }

  body {
    margin: 0;
    color: ${({ themeObj }) => themeObj.colors.mainText};
    background-color: ${({ themeObj }) => themeObj.colors.backgroundWebsite};

    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${({ themeObj }) => themeObj.text.textSize};
    

    p {
      line-height: ${({ themeObj }) => themeObj.text.lineHeight};
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: ${({ themeObj }) => themeObj.colors.headerText};
    
  }

  h1 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (75 - 30) + 30px);
    //48px х 1440
  }

  h2 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (40 - 27) + 27px);
    //32px х 1440
  }

  h3 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (30 - 24) + 24px);
    //24px х 1440
  }

  h4 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (19 - 18) + 18px);
    //18px х 1440
  }

  Header, Footer, section {
    padding: 0 30px;
    @media screen and (max-width: 392px) {
      padding: 0 10px;
    }
  }
`