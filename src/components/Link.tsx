import React from 'react';
import { Icon } from "./icon/Icon";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import {useTheme} from "../ThemeProvider";
import {ThemeObjectType} from "../styles/ColorSheme";

type CardLinkPropsType = {
    link: string
};

export const CardLink = (props: CardLinkPropsType) => {
    const { meow } = useTheme();
    return (
        <Link href={"#"} meow={meow}>
            {props.link}
            <Icon iconId={"angleBracket"} width={"4.71"} height={"7.79"} color={"#fffff"} viewBox={"0 0 4.71 7.79"}/>
        </Link>
    );
};

const Link = styled.a<{meow: ThemeObjectType}>`
  color: ${({meow}) => meow.colors.link};

  padding-top: 20px;
  display: flex;
  text-transform: capitalize;
  align-items: baseline;

  svg {
    margin-left: 8px;

    &:hover {
      color: ${({meow}) => meow.colors.headerText};
      transition: color 0.3s ease-out;
    }
  }

  &:hover {
    color: ${({meow}) => meow.colors.headerText};
    transition: ${({meow}) => meow.animation.transitionColor};
  }
`;
