import React from 'react';
import styled from "styled-components";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {ExtraSkillsFragment} from "./ExtraSkillsFragment";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

export const ExtraSkillsMaine = () => {
    const { meow } = useTheme();
    return (
        <ExtraSkills meow={meow}>
            <SidebarTitle text={"Extra Skills"}></SidebarTitle>
            <ExtraSkillsFragment text={"Bootstrap, Materialize"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"Stylus, Sass, Less"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"Gulp, Webpack, Grunt"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"GIT Knowledge"}></ExtraSkillsFragment>
        </ExtraSkills>
    );
};
const ExtraSkills = styled.div <{meow: ThemeObjectType}>`
  border-bottom: 1px solid ${({meow}) =>meow.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`