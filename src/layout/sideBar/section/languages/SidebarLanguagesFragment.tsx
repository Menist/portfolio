import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

type LanguagesFragmentPropsType = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const SidebarLanguagesFragment = (props: LanguagesFragmentPropsType) => {
    const {themeObj} = useTheme();

    return (
        <Fade cascade damping={.9}>
            <SidebarProgressBar>
                <FlexWrapper justify={"space-between"}>
                    <SidebarProgressTitle themeObj={themeObj}>{props.textTitle}</SidebarProgressTitle>
                    <SidebarProgressNumber themeObj={themeObj}>{props.textProgress}</SidebarProgressNumber>
                </FlexWrapper>
                <Fade cascade damping={.9}>
                    <SidebarProgressContainer themeObj={themeObj}>
                        <SidebarProgressLine themeObj={themeObj} progress={props.progress}></SidebarProgressLine>
                    </SidebarProgressContainer>
                </Fade>
            </SidebarProgressBar>
        </Fade>
    );
};
const SidebarProgressBar = styled.div`
  padding: 15px 0 10px;
`

const SidebarProgressContainer = styled.div<{ themeObj: ThemeObjectType }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({themeObj}) => themeObj.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${({themeObj}) => themeObj.colors.primary};
`
const SidebarProgressLine = styled.div<
    { progress: CSSProperties['width'], themeObj: ThemeObjectType }
>`
  width: ${props => props.progress || "0%"};
  border-radius: 30px;
  height: 2px;
  background-color: ${({themeObj}) => themeObj.colors.primary};
  transition: width 0.3s ease-in-out;
  --time: 3s;
  transform-origin: left top;
  transform: scaleX(0);
  animation: scale var(--time) linear;
}

@keyframes scale {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
`
const SidebarProgressTitle = styled.span <{ themeObj: ThemeObjectType }>`
  padding-bottom: 5px;
  color: ${({themeObj}) => themeObj.colors.mainText};
`
const SidebarProgressNumber = styled.span <{ themeObj: ThemeObjectType }>`
`