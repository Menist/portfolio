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

export const SkillsFragment = (props: SkillsFragmentPropsType) => {
    const { themeObj } = useTheme();

    return (
        <ProgressBar>
            <FlexWrapper justify={"space-between"}>
                <ProgressText themeObj={themeObj}>{props.textTitle}</ProgressText>
                <ProgressText themeObj={themeObj}>{props.textProgress}</ProgressText>
            </FlexWrapper>
            <SkillsProgressLine themeObj={themeObj}>
                <Progress themeObj={themeObj} progress={props.progress}></Progress>
            </SkillsProgressLine>
        </ProgressBar>
    );
};
const ProgressBar = styled.div`
  padding: 15px 0 10px;
`

const SkillsProgressLine = styled.div<{themeObj: ThemeObjectType}>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({themeObj}) =>themeObj.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${({themeObj}) =>themeObj.colors.primary};
`
const Progress = styled.div<
    { progress: CSSProperties['width'], themeObj: ThemeObjectType}
>`
  width: ${props=>props.progress || "0%"};
  border-radius: 30px;
  height: 2px;
  background-color: ${({themeObj}) =>themeObj.colors.primary};
  transition: width 0.3s ease-in-out;

`
const ProgressText = styled.span<{themeObj: ThemeObjectType}>`
  padding-bottom: 5px;
  color: ${({themeObj}) =>themeObj.colors.mainText};
`