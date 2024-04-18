import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {SidebarAboutFragment} from "./SidebarAboutFragment";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const SidebarAbout = () => {
    const { themeobj } = useTheme();

    const aboutData = [
        { bgColor: themeobj.colors.primary, text: "Age:", text2: "24",color: themeobj.colors.mainText},
        { bgColor: themeobj.colors.primary, text: "Residence:", text2: "BD",color: themeobj.colors.mainText },
        { bgColor: themeobj.colors.primary, text: "Freelance:", text2: "Available", color: "#7EB942" },
        { bgColor: themeobj.colors.primary, text: "Address", text2: "Dhaka,Bangladesh", color: themeobj.colors.mainText }
    ];

    return (
        <Fade cascade damping={.9}>
            <AboutStyled themeobj={themeobj}>
                <FlexWrapper direction={"column"}>
                    {aboutData.map((item, index) => (
                        <FlexWrapper justify={"space-between"} key={index}>
                            <SidebarAboutFragment bgColor={item.bgColor} text={item.text}></SidebarAboutFragment>
                            <SidebarAboutFragment text={item.text2} color={item.color}></SidebarAboutFragment>
                        </FlexWrapper>
                    ))}
                </FlexWrapper>
            </AboutStyled>
        </Fade>
    );
};

const AboutStyled = styled.div<{themeobj: themeobjectType}>`
  border-bottom: 1px solid ${({themeobj}) =>themeobj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
