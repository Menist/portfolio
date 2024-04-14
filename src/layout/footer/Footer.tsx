import React from 'react';
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../ThemeProvider";
import {ThemeObjectType} from "../../styles/ColorSheme";

export const Footer = () => {
    const { themeObj } = useTheme();

    return (
        <Fade cascade damping={.3} >
            <FooterSection themeObj={themeObj}>
                <p><span>&#169;</span>2021 All Rights Reserved.Ojjomedia</p>
            </FooterSection>
        </Fade>
    );
};
const FooterSection = styled.footer<{themeObj: ThemeObjectType}>`
  p {
    color:  ${({themeObj}) =>themeObj.colors.headerText};
    background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
    padding-top: 18px;
    padding-bottom: 18px;
    text-align: center;
  }

  span {
    color:  ${({themeObj}) =>themeObj.colors.primary};
    padding-right: 25px;
  }

  @media screen and (max-width: 1091px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 65px;
  }
`
