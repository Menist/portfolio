import React from 'react';
import styled from "styled-components";
import {useTheme} from "../../../ThemeProvider";
import {ThemeObjectType} from "../../../styles/ColorSheme";
type CardBtnPropsType={
    textBtn:string
}

export const PriceCardBtn = (props: CardBtnPropsType) => {
    const { themeObj }= useTheme()
    return (
        <PriceCardButton themeObj={themeObj}>
            {props.textBtn}
        </PriceCardButton>
    );
};
const PriceCardButton=styled.button<{themeObj: ThemeObjectType}>`
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
    background-color: ${({themeObj}) =>themeObj.colors.primary};
    transition: ${({themeObj}) =>themeObj.animation.transitionBackground};
    }
  }
`