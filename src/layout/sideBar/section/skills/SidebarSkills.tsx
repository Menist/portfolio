import React from 'react';
import styled from "styled-components";
import {SidebarSectionTitle} from "../../SidebarSectionTitle";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";
import {ProgressBarFragment} from "../../ProgressBar";

export const SidebarSkills = () => {
    const {themeObj} = useTheme();

    // Массив с данными о навыках и их прогрессе
    const skillsData = [
        { title: "Html", progress: "50%" },
        { title: "CSS", progress: "15%" },
        { title: "Js", progress: "20%" },
        { title: "PHP", progress: "0%" },
        { title: "WordPress", progress: "0%" }
    ];

    return (
        <Fade cascade damping={.9}>
            <SidebarSkillsStyled themeObj={themeObj}>
                <SidebarSectionTitle text={"Skills"}></SidebarSectionTitle>
                {skillsData.map((skill, index) => (
                    <ProgressBarFragment
                        key={index}
                        textTitle={skill.title}
                        textProgress={skill.progress}
                        progress={skill.progress}
                    />
                ))}
            </SidebarSkillsStyled>
        </Fade>
    );
};

const SidebarSkillsStyled = styled.div<{ themeObj: ThemeObjectType }>`
  border-bottom: 1px solid ${({themeObj}) => themeObj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
