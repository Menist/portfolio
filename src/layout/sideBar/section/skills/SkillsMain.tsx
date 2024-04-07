import React from 'react';
import styled from "styled-components";
import {SkillsFragment} from "./SkillsFragment";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {SidebarLine} from "../../../../components/SidebarLine";

export const SkillsMain = () => {
    return (
        <SkillsMainStyled>
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
            <SidebarLine></SidebarLine>
        </SkillsMainStyled>
    );
};
const SkillsMainStyled = styled.div`

`