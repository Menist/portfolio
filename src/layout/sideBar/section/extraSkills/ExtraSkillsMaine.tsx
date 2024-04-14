import React from 'react';
import styled from "styled-components";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {ExtraSkillsFragment} from "./ExtraSkillsFragment";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const ExtraSkillsMaine = () => {
    const { themeObj } = useTheme();
    return (
        <Fade cascade damping={.9}>
        <ExtraSkills themeObj={themeObj}>
            <SidebarTitle text={"Extra Skills"}></SidebarTitle>
            <ExtraSkillsFragment text={"Bootstrap, Materialize"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"Stylus, Sass, Less"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"Gulp, Webpack, Grunt"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"GIT Knowledge"}></ExtraSkillsFragment>
        </ExtraSkills>
        </Fade>
    );
};
const ExtraSkills = styled.div <{themeObj: ThemeObjectType}>`
  border-bottom: 1px solid ${({themeObj}) =>themeObj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`