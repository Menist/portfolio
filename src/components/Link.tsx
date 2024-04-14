import React from 'react';
import { Icon } from "./icon/Icon";
import styled from "styled-components";
import {useTheme} from "../ThemeProvider";
import {ThemeObjectType} from "../styles/ColorSheme";

type CardLinkPropsType = {
    link: string
};

export const CardLink = (props: CardLinkPropsType) => {
    const { themeObj } = useTheme();
    return (
        <Link href={"#"} themeObj={themeObj}>
            {props.link}
            <Icon iconId={"angleBracket"} width={"4.71"} height={"7.79"} color={"#fffff"} viewBox={"0 0 4.71 7.79"}/>
        </Link>
    );
};

const Link = styled.a<{themeObj: ThemeObjectType}>`
  color: ${({themeObj}) => themeObj.colors.link};

  padding-top: 20px;
  display: flex;
  text-transform: capitalize;
  align-items: baseline;

  svg {
    margin-left: 8px;

    &:hover {
      color: ${({themeObj}) => themeObj.colors.headerText};
      transition: color 0.3s ease-out;
    }
  }

  &:hover {
    color: ${({themeObj}) => themeObj.colors.headerText};
    transition: ${({themeObj}) => themeObj.animation.transitionColor};
  }
`;
