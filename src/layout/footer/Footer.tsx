import React from 'react';
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../ThemeProvider";
import {ThemeObjectType} from "../../styles/ColorSheme";

export const Footer = () => {
    const { meow } = useTheme();

    return (
        <Fade cascade damping={.3} >
            <FooterSection meow={meow}>
                <p><span>&#169;</span>2021 All Rights Reserved.Ojjomedia</p>
            </FooterSection>
        </Fade>
    );
};
const FooterSection = styled.footer<{meow: ThemeObjectType}>`
  p {
    color:  ${({meow}) =>meow.colors.headerText};
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
    padding-top: 18px;
    padding-bottom: 18px;
    text-align: center;
  }

  span {
    color:  ${({meow}) =>meow.colors.primary};
    padding-right: 25px;
  }

  @media screen and (max-width: 1091px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 65px;
  }
`
