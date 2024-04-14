import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Menu} from "../header/Menu";
import {ThemeObjectType} from "../../styles/ColorSheme";
import {useTheme} from "../../ThemeProvider";



export const MobileMenu = () => {
    const { themeObj } = useTheme();

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(prev => !prev)
    }
    return (
        <StyledMobileMenu themeObj={themeObj} isOpen={menuIsOpen}>
            <BurgerBtn themeObj={themeObj} isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerBtn>
                <MobileMenuPopup themeObj={themeObj} isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                        <Menu></Menu>
                </MobileMenuPopup>
        </StyledMobileMenu>
    );
};
const MobileMenuPopup = styled.div<{ isOpen: boolean, themeObj: ThemeObjectType }>`
  
  ${props => props.isOpen && css<{ isOpen: boolean, themeObj: ThemeObjectType }>`
    position: fixed;
    background-color: rgba(37, 37, 37, 0.79);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 105;
    backdrop-filter: blur(4px);
    transition: .5s .2s ease-in-out;
  `}
  
  ${props => !props.isOpen && css<{ isOpen: boolean }>`
    opacity: 0;
  `}
`
const BurgerBtn = styled.button<{ isOpen: boolean, themeObj: ThemeObjectType }>`
  position: fixed;
  top: 5px;
  right: 3px;
  width: 50px;
  height: 49px;
  text-align: center;
  z-index: 100;
  cursor: pointer;
  background-color: ${({themeObj}) =>themeObj.colors.accent};
  border: 2px solid transparent;
  border-radius: 3px;
  transition: ${({themeObj}) =>themeObj.animation.transitionAll};

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    z-index: 106;
  `}
  
  span{
    width: 30px;
    height: 2px;
    position: absolute;
    left: 8px;
    bottom: 22px;
    display: block;
    background-color: ${({themeObj}) =>themeObj.colors.headerText};
    cursor: pointer;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);

    ${props => props.isOpen && css<{ isOpen: boolean, themeObj: ThemeObjectType }>`
      background-color: ${({themeObj}) =>themeObj.colors.headerText};
      transform: rotate(507deg);
      background-color: ${({themeObj}) =>themeObj.colors.headerText};
    `}
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${({themeObj}) =>themeObj.colors.headerText};
      top: -10px;
      transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
      z-index: 9999;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(425deg);
        top: 0;
      `}
    }

    &::after {
      transition: .5s ease-in-out;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${({themeObj}) =>themeObj.colors.headerText};
      bottom: -10px;

      ${props => props.isOpen && css<{ isOpen: boolean, themeObj: ThemeObjectType}>`
        transform: rotate(425deg);
        background-color: ${({themeObj}) =>themeObj.colors.primary};
        bottom: 0;
      `}
    }
  }

  &:hover {
    border: 2px solid ${({themeObj}) =>themeObj.colors.primary};
    background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
    border-radius: 3px;
  }
`
const StyledMobileMenu = styled.nav<{ isOpen: boolean, themeObj: ThemeObjectType }>`
  text-transform: capitalize;
  display: none;

  a {
    color: ${({themeObj}) =>themeObj.colors.primary};
    position: relative;

    &:after {
      opacity: 1;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({themeObj}) =>themeObj.colors.primary};
      content: "";
      transition: .5s .2s ease-in-out;
    }

    &:hover:after {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    ul {
      display: block;
      align-items: center;
      justify-content: center;
      font-size: xx-large;
      position: absolute;
      top: ${(props) => props.isOpen ? '50%' : '-100%'};
     
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      transition: .25s 0s ease-in-out;

      &:hover {
        border-bottom-color: ${({themeObj}) =>themeObj.colors.primary};
      }

      li {
        padding-top: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`
