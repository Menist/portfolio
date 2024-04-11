import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./Menu";
import {MobileMenu} from "../mobileMenu/MobileMenu";
import {useTheme} from "../../ThemeProvider";

export const Header = () => {
    const { theme } = useTheme();
    return (
        <StyledHeader id={'home'} theme={theme}>
            <MobileMenu />
            <FlexWrapper justify={"flex-start"}
                         align={"center"}
                         padding={"20px 0 10px 60px"}>
                <Logo/>
                <Menu></Menu>
            </FlexWrapper>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  position: relative;

  &::after {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme === 'dark' ? '#1E1E1E' : '#FFFFFF'};
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


