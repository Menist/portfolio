import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";

export const Btn = () => {
    return (
        <Button>Download cv
            <Icon iconId={"downloadSidebar"} width={"14"} height={"16"}/>
        </Button>
    );
};
const Button = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 40px 10px 40px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.headerText};
  cursor: pointer;
  border: 2px solid transparent;
  
  &:hover{
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.background};
    transition:  ${theme.animation.transitionAll};
  }
  
  @media screen and (max-width: 1091px){
    margin-bottom: 70px;
  }
  
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
  
`