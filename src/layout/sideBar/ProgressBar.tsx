import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../ThemeProvider";
import {FlexWrapper} from "../../components/FlexWrapper";
import {ThemeObjectType} from "../../styles/ColorSheme";

type LanguagesFragmentPropsType1 = {
    textTitle: string;
    textProgress: string;
    progress: CSSProperties['width'];
}

export const ProgressBarFragment = (props: LanguagesFragmentPropsType1) => {
    const {themeObj} = useTheme();

    return (
        <Fade cascade damping={.9}>
            <ProgressBarContainer>
                <FlexWrapper justify={"space-between"}>
                    <ProgressBarTitle themeObj={themeObj}>{props.textTitle}</ProgressBarTitle>
                    <ProgressBarNumber themeObj={themeObj}>{props.textProgress}</ProgressBarNumber>
                </FlexWrapper>
                <Fade cascade damping={.9}>
                    <ProgressBarContainerLine themeObj={themeObj}>
                        <ProgressBarLine themeObj={themeObj} progress={props.progress}></ProgressBarLine>
                    </ProgressBarContainerLine>
                </Fade>
            </ProgressBarContainer>
        </Fade>
    );
};
const ProgressBarContainer = styled.div`
  padding: 15px 0 10px;
`

const ProgressBarContainerLine = styled.div<{ themeObj: ThemeObjectType }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({themeObj}) => themeObj.colors.primary};
  border-radius: 30px;
  padding: 1px;
  color: ${({themeObj}) => themeObj.colors.primary};
`
const ProgressBarLine = styled.div<
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
const ProgressBarTitle = styled.span <{ themeObj: ThemeObjectType }>`
  padding-bottom: 5px;
  color: ${({themeObj}) => themeObj.colors.mainText};
`
const ProgressBarNumber = styled.span <{ themeObj: ThemeObjectType }>`
`