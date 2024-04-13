import React from 'react';
import styled from "styled-components";
import {SkillsFragment} from "./SkillsFragment";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";

export const SkillsMain = () => {
    const { meow } = useTheme();


    return (
        <SkillsMainStyled meow={meow}>
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
    );
};
const SkillsMainStyled = styled.div<{meow: ThemeObjectType}>`
  border-bottom: 1px solid  ${({meow}) =>meow.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`