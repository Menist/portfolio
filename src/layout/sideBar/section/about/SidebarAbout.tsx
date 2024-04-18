import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {SidebarAboutFragment} from "./SidebarAboutFragment";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const SidebarAbout = () => {
    const { themeObj } = useTheme();

    // Массив с данными для каждого SidebarAboutFragment
    const aboutData = [
        { bgColor: themeObj.colors.primary, text1: "Age:", text2: "24" },
        { bgColor: themeObj.colors.primary, text1: "Residence:", text2: "BD" },
        { bgColor: themeObj.colors.primary, text1: "Freelance:", text2: "Available", color: "#7EB942" },
        { bgColor: themeObj.colors.primary, text1: "Address", text2: "Dhaka,Bangladesh" }
    ];

    return (
        <Fade cascade damping={.9}>
            <AboutStyled themeObj={themeObj}>
                <FlexWrapper direction={"column"}>
                    {aboutData.map((item, index) => (
                        <FlexWrapper justify={"space-between"} key={index}>
                            <SidebarAboutFragment bgColor={item.bgColor} text={item.text1}></SidebarAboutFragment>
                            <SidebarAboutFragment text={item.text2} color={item.color}></SidebarAboutFragment>
                        </FlexWrapper>
                    ))}
                </FlexWrapper>
            </AboutStyled>
        </Fade>
    );
};

const AboutStyled = styled.div<{themeObj: ThemeObjectType}>`
  border-bottom: 1px solid ${({themeObj}) =>themeObj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
