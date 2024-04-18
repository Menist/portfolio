import React from 'react';
import styled from "styled-components";
import {SidebarSectionTitle} from "../../SidebarSectionTitle";
import {SidebarExtraSkillsFragment} from "./SidebarExtraSkillsFragment";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const SidebarExtraSkills = () => {
    const {themeObj} = useTheme();
    return (
        <Fade cascade damping={.9}>
            <SidebarExtraSkillsContainer themeObj={themeObj}>
                <SidebarSectionTitle text={"Extra Skills"}></SidebarSectionTitle>
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