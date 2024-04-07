import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {theme} from "../../../../styles/Theme";


type SidebarAboutTextPropsType = {
    text: string;
    bgColor?: CSSProperties['color']
    color?: CSSProperties['color']
}

export const SidebarAboutContent = (props: SidebarAboutTextPropsType) => {
    return (
        <SidebarAboutText color={props.color} bgColor={props.bgColor}>{props.text}</SidebarAboutText>
    );
};

const SidebarAboutText = styled.span<
    { bgColor: CSSProperties['color'] }
>`
  padding: 5px;
  background-color: ${(props) => props.bgColor || "inherit"};
  color: ${props => props.color || theme.colors.headerText};
`;
