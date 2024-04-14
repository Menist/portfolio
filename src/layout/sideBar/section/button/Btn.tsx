import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const Btn = () => {
    const {themeObj} = useTheme();
    return (
        <Fade cascade damping={.9}>
            <Button themeObj={themeObj}>Download cv
                <Icon iconId={"downloadSidebar"} color={'currentColor'} width={"14"} height={"16"}/>
            </Button>
        </Fade>
    );
};
const Button = styled.button <{ themeObj: ThemeObjectType }>`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 40px 10px 40px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({themeObj}) => themeObj.colors.primary};
  color: ${({themeObj}) => themeObj.colors.headerText};
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({themeObj}) => themeObj.colors.primary};
    background-color: ${({themeObj}) => themeObj.colors.backgroundColorSection};
    transition: ${({themeObj}) => themeObj.animation.transitionAll};
  }

  @media screen and (max-width: 1091px) {
    margin-bottom: 70px;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }

`