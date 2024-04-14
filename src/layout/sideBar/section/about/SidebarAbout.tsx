import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {SidebarAboutContent} from "./SidebarAboutContent";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";
export const SidebarAbout = () => {
    const { themeObj } = useTheme();
    return (
        <Fade cascade damping={.9}>
        <AboutStyled themeObj={themeObj}>
            <FlexWrapper direction={"column"}>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={themeObj.colors.primary} text={"Age:"}></SidebarAboutContent>
                    <SidebarAboutContent text={"24"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={themeObj.colors.primary} text={"Residence:"}></SidebarAboutContent>
                    <SidebarAboutContent text={"BD"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent bgColor={themeObj.colors.primary} text={"Freelance:"}></SidebarAboutContent>
                    <SidebarAboutContent color={"#7EB942"} text={"Available"}></SidebarAboutContent>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                    <SidebarAboutContent  bgColor={themeObj.colors.primary} text={"Address"}></SidebarAboutContent>
                    <SidebarAboutContent text={"Dhaka,Bangladesh"}></SidebarAboutContent>
                </FlexWrapper>
            </FlexWrapper>
        </AboutStyled>
        </Fade>
    );
};
const AboutStyled = styled.div<{themeObj: ThemeObjectType}>`
  border-bottom: 1px solid ${({themeObj}) =>themeObj.colors.backgroundWebsite};;
  margin: 25px 0;
  padding-bottom: 25px;
`

