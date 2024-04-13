import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";

type SkillsFragmentPropsType = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const SkillsFragment = (props: SkillsFragmentPropsType) => {
    const { meow } = useTheme();


    return (
        <ProgressBar>
            <FlexWrapper justify={"space-between"}>
                <ProgressText meow={meow}>{props.textTitle}</ProgressText>
                <ProgressText meow={meow}>{props.textProgress}</ProgressText>
            </FlexWrapper>
            <SkillsProgress meow={meow}>
                <Progress meow={meow} progress={props.progress}></Progress>
            </SkillsProgress>
        </ProgressBar>
    );
};
const ProgressBar = styled.div`
  padding: 15px 0 10px;
`

const SkillsProgress = styled.div<{meow: ThemeObjectType}>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({meow}) =>meow.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${({meow}) =>meow.colors.primary};
`
const Progress = styled.div<
    { progress: CSSProperties['width'], meow: ThemeObjectType}
>`
  width: ${props=>props.progress || "0%"};
  border-radius: 30px;
  height: 2px;
  background-color: ${({meow}) =>meow.colors.primary};
  transition: width 0.3s ease-in-out;

`
const ProgressText = styled.span<{meow: ThemeObjectType}>`
  //font-size: 15px;
  padding-bottom: 5px;
  color: ${theme.colors.mainText};
`