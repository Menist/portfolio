import React from 'react';
import styled from "styled-components";
import {SidebarSectionTitle} from "../../SidebarSectionTitle";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";
import {ProgressBarFragment} from "../../ProgressBar";

export const Languages = () => {
    const {themeobj} = useTheme();

    const languagesData = [
        { title: "Bangla", progress: "50%" },
        { title: "English", progress: "80%" },
        { title: "Spanish", progress: "20%" }
    ];

    return (
        <Fade cascade damping={.9}>
            <SidebarLanguages themeobj={themeobj}>
                <SidebarSectionTitle text={"Languages"}></SidebarSectionTitle>
                {languagesData.map((language, index) => (
                    <ProgressBarFragment
                        key={index}
                        textTitle={language.title}
                        textProgress={language.progress}
                        progress={language.progress}
                    />
                ))}
            </SidebarLanguages>
        </Fade>
    );
};

const SidebarLanguages = styled.div<{ themeobj: themeobjectType }>`
  border-bottom: 1px solid ${({themeobj}) => themeobj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
