import React from 'react';
import styled from "styled-components";
import {SidebarLanguagesTitle} from "../../../../components/SidebarLanguagesTitle";
import {SidebarExtraSkillsFragment} from "./SidebarExtraSkillsFragment";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const SidebarExtraSkills = () => {
    const {themeObj} = useTheme();
    return (
        <Fade cascade damping={.9}>
            <SidebarExtraSkillsContainer themeObj={themeObj}>
                <SidebarLanguagesTitle text={"Extra Skills"}></SidebarLanguagesTitle>
                <SidebarExtraSkillsFragment text={"Bootstrap, Materialize"}></SidebarExtraSkillsFragment>
                <SidebarExtraSkillsFragment text={"Stylus, Sass, Less"}></SidebarExtraSkillsFragment>
                <SidebarExtraSkillsFragment text={"Gulp, Webpack, Grunt"}></SidebarExtraSkillsFragment>
                <SidebarExtraSkillsFragment text={"GIT Knowledge"}></SidebarExtraSkillsFragment>
            </SidebarExtraSkillsContainer>
        </Fade>
    );
};
const SidebarExtraSkillsContainer = styled.div <{ themeObj: ThemeObjectType }>`
  border-bottom: 1px solid ${({themeObj}) => themeObj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`