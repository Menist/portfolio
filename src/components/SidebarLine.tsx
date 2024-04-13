import React from 'react';
import styled from "styled-components";
import {useTheme} from "../ThemeProvider";
import {ThemeObjectType} from "../styles/ColorSheme";

export const SidebarLine = () => {
    const { meow } = useTheme();

    return (
        <Line meow={meow}></Line>
    );
};
const Line=styled.div<{meow: ThemeObjectType}>`
  &:after {
    content: "";
    display: block;
    background-color: ${({meow}) =>meow.colors.backgroundWebsite};
    height: 1px;
    margin: 25px 0;
  }
`