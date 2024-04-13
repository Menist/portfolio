import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

type LanguagesFragmentPropsType = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const LanguagesFragment = (props: LanguagesFragmentPropsType) => {
    const { meow } = useTheme();

    return (
        <ProgressBar>
            <FlexWrapper justify={"space-between"}>
                <ProgressText meow={meow}>{props.textTitle}</ProgressText>
                <ProgressText meow={meow}>{props.textProgress}</ProgressText>
            </FlexWrapper>
            <LanguagesProgress meow={meow}>
                <Progress meow={meow} progress={props.progress}></Progress>
            </LanguagesProgress>
        </ProgressBar>
    );
};
const ProgressBar = styled.div`
  padding: 15px 0 10px;
`

const LanguagesProgress = styled.div<{meow: ThemeObjectType}>`
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
  --time: 3s; 
  transform-origin: left top;
  transform: scaleX(0);
  animation: scale var(--time) forwards;
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
const ProgressText = styled.span <{meow: ThemeObjectType}>`
  padding-bottom: 5px;
  color: ${({meow}) =>meow.colors.mainText};
`