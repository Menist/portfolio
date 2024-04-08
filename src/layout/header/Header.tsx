import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Menu} from "./Menu";
import {MobileMenu} from "../mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader id={'home'}>
            <MobileMenu/>
            <FlexWrapper justify={"flex-start"}
                         align={"center"}
                         color={theme.colors.background}
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
    background-color: ${theme.colors.accent};
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


