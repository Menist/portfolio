import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {Menu} from "../header/Menu";



export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(prev => !prev)
    }
    return (
        <StyledMobileMenu isOpen={menuIsOpen}>
            <BurgerBtn isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerBtn>
                <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                        <Menu></Menu>
                </MobileMenuPopup>
        </StyledMobileMenu>
    );
};
// const MobileMenuWrap=styled.div``
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
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
const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 5px;
  right: 3px;
  width: 50px;
  height: 49px;
  text-align: center;
  z-index: 100;
  cursor: pointer;
  background-color: rgba(255, 180, 0, 0.59);
  border: 2px solid transparent;
  border-radius: 3px;
  transition: ${theme.animation.transitionAll};

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    z-index: 106;
  `}
  
  span {
    width: 30px;
    height: 2px;
    position: absolute;
    left: 8px;
    bottom: 22px;
    display: block;
    background-color: ${theme.colors.headerText};
    cursor: pointer;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: ${theme.colors.headerText};
      transform: rotate(507deg);
      background-color: ${theme.colors.headerText};
    `}
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.headerText};
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
      background-color: ${theme.colors.headerText};
      bottom: -10px;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(425deg);
        background-color: ${theme.colors.primary};
        bottom: 0;
      `}
    }
  }

  &:hover {
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.background};
    border-radius: 3px;
  }
`
const StyledMobileMenu = styled.nav<{ isOpen: boolean }>`
  text-transform: capitalize;
  display: none;

  a {
    color: ${theme.colors.primary};
    position: relative;

    &:after {
      opacity: 1;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.primary};
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
        border-bottom-color: ${theme.colors.primary};
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
