import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./Menu";
import {MobileMenu} from "../mobileMenu/MobileMenu";
import {useTheme} from "../../ThemeProvider";
import {ThemeObjectType} from "../../styles/ColorSheme";

export const Header = () => {
    const { themeObj } = useTheme();
    return (
        <HeaderMenu id={'home'} themeObj={themeObj}>
            <MobileMenu />
            <FlexWrapper justify={"flex-start"}
                         align={"center"}
                         padding={"20px 0 10px 60px"}>
                <Logo/>
                <Menu></Menu>
            </FlexWrapper>
        </HeaderMenu>
    );
};
const HeaderMenu = styled.header<{themeObj: ThemeObjectType}>`
  position: relative;
  
  ${FlexWrapper} {
    background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
    border-bottom: 2px solid ${({themeObj}) =>themeObj.colors.backgroundWebsite};
  }

  &::after {
    content: "";
    display: block;
    background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
    height: 1px;
  }

  @media screen and (max-width: 1091px) {
    ${FlexWrapper} {
      justify-content: space-evenly;
      padding: 10px;
    }
  }
  
  @media screen and (max-width: 768px) {
    &::after {
      content: none;
    }
  }
  
  @media screen and (max-width: 768px) {
    ${FlexWrapper} {
      display: none;
    }
  }
`


