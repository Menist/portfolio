import React from 'react';
import { Icon } from "./icon/Icon";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type CardLinkPropsType = {
    link: string
};

export const CardLink = (props: CardLinkPropsType) => {
    return (
        <Link href={"#"}>
            {props.link}
            <Icon iconId={"angleBracket"} width={"4.71"} height={"7.79"} color={"#fffff"} viewBox={"0 0 4.71 7.79"}/>
        </Link>
    );
};

const Link = styled.a`
  color: ${theme.colors.link};
  padding-top: 20px;
  display: flex;
  text-transform:capitalize;
  //font-size: 18px;
  align-items: baseline;
  
  svg {
    margin-left: 8px;
    &:hover{
      color: ${theme.colors.headerText};
      transition: color 0.3s ease-out;
    }
  }
  &:hover{
    color: ${theme.colors.headerText};
    transition: ${theme.animation.transitionColor};
  }
`;
