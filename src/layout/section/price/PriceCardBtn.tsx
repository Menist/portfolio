import React from 'react';
import styled from "styled-components";
import {useTheme} from "../../../ThemeProvider";
import {themeobjectType} from "../../../styles/ColorSheme";
type CardBtnPropsType={
    textBtn:string
}

export const PriceCardBtn = (props: CardBtnPropsType) => {
    const { themeobj }= useTheme()
    return (
        <PriceCardButton themeobj={themeobj}>
            {props.textBtn}
        </PriceCardButton>
    );
};
const PriceCardButton=styled.button<{themeobj: themeobjectType}>`
  max-width: 160px;
  padding: 10px 25px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 1px 10px 0 #00000026;
  background-color: white;
  margin-top: 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  
  &:hover{
    background-color: ${({themeobj}) =>themeobj.colors.primary};
    transition: ${({themeobj}) =>themeobj.animation.transitionBackground};
    }
  }
`