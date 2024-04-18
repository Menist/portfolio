import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";

type SkillsFragmentPropsType = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const SidebarSkillsFragment = (props: SkillsFragmentPropsType) => {
    const { themeObj } = useTheme();

    return (
        <SidebarProgressBar>
            <FlexWrapper justify={"space-between"}>
                <SidebarProgressText themeObj={themeObj}>{props.textTitle}</SidebarProgressText>
                <SidebarProgressNumber themeObj={themeObj}>{props.textProgress}</SidebarProgressNumber>
            </FlexWrapper>
            <SidebarProgressContainer themeObj={themeObj}>
                <SidebarProgressLine themeObj={themeObj} progress={props.progress}></SidebarProgressLine>
            </SidebarProgressContainer>
        </SidebarProgressBar>
    );
};
const SidebarProgressBar = styled.div`
  padding: 15px 0 10px;
`

const SidebarProgressContainer = styled.div<{themeObj: ThemeObjectType}>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({themeObj}) =>themeObj.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${({themeObj}) =>themeObj.colors.primary};
`
const SidebarProgressLine = styled.div<
    { progress: CSSProperties['width'], themeObj: ThemeObjectType}
>`
  width: ${props=>props.progress || "0%"};
  border-radius: 30px;
  height: 2px;
  background-color: ${({themeObj}) =>themeObj.colors.primary};
  transition: width 0.3s ease-in-out;
`
const SidebarProgressText = styled.span<{themeObj: ThemeObjectType}>`
  padding-bottom: 5px;
  color: ${({themeObj}) =>themeObj.colors.mainText};
`
const SidebarProgressNumber = styled.span<{themeObj: ThemeObjectType}>`
`