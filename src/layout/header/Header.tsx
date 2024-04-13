import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper, FlexWrapperStyled} from "../../components/FlexWrapper";
import {Menu} from "./Menu";
import {MobileMenu} from "../mobileMenu/MobileMenu";
import {useTheme} from "../../ThemeProvider";
import {ThemeObjectType} from "../../styles/ColorSheme";

export const Header = () => {
    const { meow } = useTheme();
    return (
        <StyledHeader id={'home'} meow={meow}>
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
const StyledHeader = styled.header<{meow: ThemeObjectType}>`
  position: relative;
  ${FlexWrapperStyled} {
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
    border-bottom: 2px solid ${({meow}) =>meow.colors.backgroundWebsite};
  }

  &::after {
    content: "";
    display: block;
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
    height: 1px;
  }

  @media screen and (max-width: 1091px) {
    ${FlexWrapperStyled} {
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
    ${FlexWrapperStyled} {
      display: none;
    }
  }
`


