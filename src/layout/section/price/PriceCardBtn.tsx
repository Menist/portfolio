import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
type CardBtnPropsType={
    textBtn:string
}

export const PriceCardBtn = (props: CardBtnPropsType) => {
    return (
        <ButtonPriceCard>
            {props.textBtn}
        </ButtonPriceCard>
    );
};
const ButtonPriceCard=styled.button`
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
    background-color: ${theme.colors.primary};
      transition: ${theme.animation.transitionBackground};
    }
  }
`