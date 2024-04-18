import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";


type SidebarAboutTextPropsType = {
    text: string;
    bgColor?: CSSProperties['color']
    color?: CSSProperties['color']
}

export const SidebarAboutFragment = (props: SidebarAboutTextPropsType ) => {
    const { themeObj } = useTheme();
    return (
        <SidebarAboutText
            themeObj={themeObj}{...props}
            color={props.color}
            bgColor={props.bgColor}>{props.text}
        </SidebarAboutText>
    );
};

const SidebarAboutText = styled.span<{ bgColor: CSSProperties['color'], themeObj: ThemeObjectType }>`
  padding: 5px;
  background-color: ${(props) => props.bgColor || "inherit"};
  color: ${props => props.color || props.themeObj.colors.headerText};
  max-width: fit-content;
`;
