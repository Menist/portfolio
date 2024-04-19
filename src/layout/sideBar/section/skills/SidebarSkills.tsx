import React from 'react';
import styled from "styled-components";
import {SidebarSectionTitle} from "../../SidebarSectionTitle";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";
import {ProgressBarFragment} from "../../ProgressBar";

export const SidebarSkills = () => {
    const {themeobj} = useTheme();

    const skillsData = [
        { title: "Html", progress: "80%" },
        { title: "CSS", progress: "90%" },
        { title: "Js", progress: "20%" },
        { title: "PHP", progress: "0%" },
        { title: "WordPress", progress: "0%" }
    ];

    return (
        <Fade cascade damping={.9}>
            <SidebarSkillsStyled themeobj={themeobj}>
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

const SidebarSkillsStyled = styled.div<{ themeobj: themeobjectType }>`
  border-bottom: 1px solid ${({themeobj}) => themeobj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
