import React from 'react';
import styled from "styled-components";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {ExtraSkillsFragment} from "./ExtraSkillsFragment";
import {SidebarLine} from "../../../../components/SidebarLine";

export const ExtraSkillsMaine = () => {
    return (
        <ExtraSkills>
            <SidebarTitle text={"Extra Skills"}></SidebarTitle>
            <ExtraSkillsFragment text={"Bootstrap, Materialize"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"Stylus, Sass, Less"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"Gulp, Webpack, Grunt"}></ExtraSkillsFragment>
            <ExtraSkillsFragment text={"GIT Knowledge"}></ExtraSkillsFragment>
            <SidebarLine></SidebarLine>
        </ExtraSkills>
    );
};
const ExtraSkills = styled.div``