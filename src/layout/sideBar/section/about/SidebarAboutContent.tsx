import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";


type SidebarAboutTextPropsType = {
    text: string;
    bgColor?: CSSProperties['color']
    color?: CSSProperties['color']
}

export const SidebarAboutContent = (props: SidebarAboutTextPropsType ) => {
    const { meow } = useTheme();
    return (
        <SidebarAboutText meow={meow}{...props} color={props.color} bgColor={props.bgColor}>{props.text}</SidebarAboutText>
    );
};

const SidebarAboutText = styled.span<{ bgColor: CSSProperties['color'], meow: ThemeObjectType }>`
  padding: 5px;
  background-color: ${(props) => props.bgColor || "inherit"};
  color: ${props => props.color || props.meow.colors.headerText};
`;
