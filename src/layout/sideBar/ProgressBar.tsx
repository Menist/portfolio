import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../ThemeProvider";
import {FlexWrapper} from "../../components/FlexWrapper";
import {themeobjectType} from "../../styles/ColorSheme";

type LanguagesFragmentPropsType1 = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const ProgressBarFragment = (props: LanguagesFragmentPropsType1) => {
    const {themeobj} = useTheme();

    return (
        <Fade cascade damping={.9}>
            <ProgressBarContainer>
                <FlexWrapper justify={"space-between"}>
                    <ProgressBarTitle themeobj={themeobj}>{props.textTitle}</ProgressBarTitle>
                    <ProgressBarNumber themeobj={themeobj}>{props.textProgress}</ProgressBarNumber>
                </FlexWrapper>
                <Fade cascade damping={.9}>
                    <ProgressBarContainerLine themeobj={themeobj}>
                        <ProgressBarLine themeobj={themeobj} progress={props.progress}></ProgressBarLine>
                    </ProgressBarContainerLine>
                </Fade>
            </ProgressBarContainer>
        </Fade>
    );
};
const ProgressBarContainer = styled.div`
  padding: 15px 0 10px;
`

const ProgressBarContainerLine = styled.div<{ themeobj: themeobjectType }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({themeobj}) => themeobj.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${({themeobj}) => themeobj.colors.primary};
`
const ProgressBarLine = styled.div<
    { progress: CSSProperties['width'], themeobj: themeobjectType }
>`
  width: ${props => props.progress || "0%"};
  border-radius: 30px;
  height: 2px;
  background-color: ${({themeobj}) => themeobj.colors.primary};
  transition: width 0.3s ease-in-out;
  --time: 3s;
  transform-origin: left top;
  transform: scaleX(0);
  animation: scale var(--time) linear;
  animation-fill-mode:forwards;
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
const ProgressBarTitle = styled.span <{ themeobj: themeobjectType }>`
  padding-bottom: 5px;
  color: ${({themeobj}) => themeobj.colors.mainText};
`
const ProgressBarNumber = styled.span <{ themeobj: themeobjectType }>`
`