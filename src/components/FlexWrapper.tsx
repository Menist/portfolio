import styled, {CSSProperties} from "styled-components";
import {FC, ReactNode} from "react";
import {ThemeObjectType} from "../styles/ColorSheme";
import {useTheme} from "../ThemeProvider";

type FlexWrapperPropsType = {
    direction?: CSSProperties['flexDirection']
    justify?: CSSProperties['justifyContent']
    align?: CSSProperties['alignItems']
    wrap?: CSSProperties['flexWrap']
    gap?: CSSProperties['gap']
    flex?: CSSProperties['flex']
    color?: CSSProperties['color']
    padding?: CSSProperties['padding']
    maxWidth?: CSSProperties['maxWidth']
    width?: CSSProperties['width']
    minWidth?: CSSProperties['minWidth']
}

export const FlexWrapper: FC<FlexWrapperPropsType & {children: ReactNode}> = (props) => {
    const { themeObj } = useTheme();
    return <FlexWrapperStyled themeObj={themeObj}{...props}/>
}
export const FlexWrapperStyled = styled.div<FlexWrapperPropsType & {themeObj:ThemeObjectType}>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "wrap"};
  gap: ${props => props.gap || "20px"};
  flex: ${props => props.flex || "0 0 auto"};
  background-color: ${props => props.color || "inherit"};
  //background-color: ${({themeObj}) => themeObj.colors.backgroundWebsite || "inherit"};
  
  padding: ${props => props.padding || "0 0 0 0"};
  max-width: ${props => props.maxWidth || "none"};
  width: ${props => props.width || "none"};
  min-width: ${props => props.minWidth || "auto"};
`