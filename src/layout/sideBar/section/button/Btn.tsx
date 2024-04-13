import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

export const Btn = () => {
    const { meow } = useTheme();
    return (
        <Button meow={meow}>Download cv
            <Icon iconId={"downloadSidebar"} width={"14"} height={"16"}/>
        </Button>
    );
};
const Button = styled.button <{meow: ThemeObjectType}>`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 40px 10px 40px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({meow}) =>meow.colors.primary};
  color: ${({meow}) =>meow.colors.headerText};
  cursor: pointer;
  border: 2px solid transparent;
  
  &:hover{
    border: 2px solid ${({meow}) =>meow.colors.primary};
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
    transition:   ${({meow}) =>meow.animation.transitionAll};
  }
  
  @media screen and (max-width: 1091px){
    margin-bottom: 70px;
  }
  
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
  
`