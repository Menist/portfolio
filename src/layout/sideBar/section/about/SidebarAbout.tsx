import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {SidebarAboutContent} from "./SidebarAboutContent";
import {theme} from "../../../../styles/Theme";

export const SidebarAbout = () => {
    return (
        <AboutStyled>
            <FlexWrapper direction={"column"}>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={theme.colors.primary} text={"Age:"}></SidebarAboutContent>
                    <SidebarAboutContent text={"24"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={theme.colors.primary} text={"Residence:"}></SidebarAboutContent>
                    <SidebarAboutContent text={"BD"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={theme.colors.primary} text={"Freelance:"}></SidebarAboutContent>
                    <SidebarAboutContent color={"#7EB942"} text={"Available"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent  bgColor={theme.colors.primary} text={"Address"}></SidebarAboutContent>
                    <SidebarAboutContent text={"Dhaka,Bangladesh"}></SidebarAboutContent>
                </FlexWrapper>
            </FlexWrapper>
        </AboutStyled>
    );
};
const AboutStyled = styled.div`
border-bottom: 1px solid #F0F0F6;
`

