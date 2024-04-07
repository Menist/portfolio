import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillsFragmentPropsType = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const SkillsFragment = (props: SkillsFragmentPropsType) => {
    return (
        <ProgressBar>
            <FlexWrapper justify={"space-between"}>
                <ProgressText>{props.textTitle}</ProgressText>
                <ProgressText>{props.textProgress}</ProgressText>
            </FlexWrapper>
            <SkillsProgress>
                <Progress progress={props.progress}></Progress>
            </SkillsProgress>
        </ProgressBar>
    );
};
const ProgressBar = styled.div`
  padding: 15px 0 10px;
`

const SkillsProgress = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${theme.colors.primary};
`
const Progress = styled.div<
    { progress: CSSProperties['width']}
>`
  width: ${props=>props.progress || "0%"};
  border-radius: 30px;
  height: 2px;
  background-color: ${theme.colors.primary};
  transition: width 0.3s ease-in-out;

`
const ProgressText = styled.span`
  //font-size: 15px;
  padding-bottom: 5px;
  color: ${theme.colors.mainText};
`