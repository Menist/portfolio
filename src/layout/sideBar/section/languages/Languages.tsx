import React from 'react';
import styled from "styled-components";
import {SidebarSectionTitle} from "../../SidebarSectionTitle";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";
import {ProgressBarFragment} from "../../ProgressBar";

export const Languages = () => {
    const {themeObj} = useTheme();

    const languagesData = [
        { title: "Bangla", progress: "50%" },
        { title: "English", progress: "0%" },
        { title: "Spanish", progress: "20%" }
    ];

    return (
        <Fade cascade damping={.9}>
            <SidebarLanguages themeObj={themeObj}>
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

const SidebarLanguages = styled.div<{ themeObj: ThemeObjectType }>`
  border-bottom: 1px solid ${({themeObj}) => themeObj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
