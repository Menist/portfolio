import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Menu} from "../../../header/Menu";


export const MenuPortfolio = () => {
    return (
        <StyledMenu>
            <Menu></Menu>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
  nav {
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: inherit;
    font-weight: 500;
    white-space: nowrap;

    ul {
      display: flex;
      gap: 20px;
    }

    a {
      color: ${theme.colors.headerText};

      &:hover {
        color: ${theme.colors.primary};
        transition: ${theme.animation.transitionWidth};
      }
    }

    // @media screen and (max-width: 907px) {
    //   overflow-x: scroll;
    //   max-width: calc(100vw - 370px);
    //   
    //   display: block;
    //   margin: 0 auto;
    //   padding-bottom: 10px;
    //
    //   &::-webkit-scrollbar {
    //     height: 10px;
      //     border: 1px solid ${theme.colors.accent};
    //     border-radius: 30px;
    //   }
    //
    //   &::-webkit-scrollbar-thumb {
    //     border-radius: 30px;
      //     background-color: ${theme.colors.primary};
    //   }
    //
    //   &::-webkit-scrollbar-thumb:hover {
      //     background-color: ${theme.colors.accent};
    //   }
    // }

    @media screen and (max-width: 820px) {
      ul{
        font-size: 18px;
      }
    }
    @media screen and (max-width: 768px) {
      ul {
        //justify-content: space-evenly;
        width: 100%;
        position: inherit;
        top: 50%;
        left: 50%;
        margin-right: 0;
        transform: none;
        transition: none;
        font-size: 18px;

        &:hover {
          border-bottom-color: ${theme.colors.primary};
        }

        li {
          padding-top: 10px;
        }
      }
    }
    @media screen and (max-width: 499px) {
      cursor: grab;
      overflow-x: scroll;
      max-width: calc(98vw - 60px);
      ul{
        justify-content: flex-start;
        
      }
    }
    @media screen and (max-width: 395px) {
      margin: 0 auto;
    }
  
    @media screen and (max-width: 375px) {
      max-width: calc(100vw - 60px);
    }
  }
`
