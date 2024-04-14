import React from 'react';
import styled from "styled-components";
import {SkillsFragment} from "./SkillsFragment";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";

export const SkillsMain = () => {
    const {themeObj} = useTheme();


    return (
        <Fade cascade damping={.9}>
            <SkillsMainStyled themeObj={themeObj}>
                <SidebarTitle text={"Skills"}></SidebarTitle>
                <SkillsFragment
                    textTitle={"Html"}
                    textProgress={"50%"}
                    progress={"50%"}
                ></SkillsFragment>
                <SkillsFragment
                    textTitle={"CSS"}
                    textProgress={"15%"}
                    progress={"15%"}
                ></SkillsFragment>
                <SkillsFragment
                    textTitle={"Js"}
                    textProgress={"20%"}
                    progress={"20%"}
                ></SkillsFragment>
                <SkillsFragment
                    textTitle={"PHP"}
                    textProgress={"0%"}
                    progress={"0%"}
                ></SkillsFragment>
                <SkillsFragment
                    textTitle={"WordPress"}
                    textProgress={"0%"}
                    progress={"0%"}
                ></SkillsFragment>
            </SkillsMainStyled>
        </Fade>
    );
};
const SkillsMainStyled = styled.div<{ themeObj: ThemeObjectType }>`
  border-bottom: 1px solid ${({themeObj}) => themeObj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`