import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {SidebarAboutContent} from "./SidebarAboutContent";
import {theme} from "../../../../styles/Theme";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

export const SidebarAbout = () => {
    const { meow } = useTheme();
    return (
        <AboutStyled meow={meow}>
            <FlexWrapper direction={"column"}>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={meow.colors.primary} text={"Age:"}></SidebarAboutContent>
                    <SidebarAboutContent text={"24"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={meow.colors.primary} text={"Residence:"}></SidebarAboutContent>
                    <SidebarAboutContent text={"BD"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={meow.colors.primary} text={"Freelance:"}></SidebarAboutContent>
                    <SidebarAboutContent color={"#7EB942"} text={"Available"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent  bgColor={meow.colors.primary} text={"Address"}></SidebarAboutContent>
                    <SidebarAboutContent text={"Dhaka,Bangladesh"}></SidebarAboutContent>
                </FlexWrapper>
            </FlexWrapper>
        </AboutStyled>
    );
};
const AboutStyled = styled.div<{meow: ThemeObjectType}>`
  border-bottom: 1px solid ${({meow}) =>meow.colors.backgroundWebsite};;
  margin: 25px 0;
  padding-bottom: 25px;
`

