import React from 'react';
import styled from "styled-components";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";
import {SkillsFragment} from "./SkillsFragment";

export const Skills = () => {
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
            <SkillsStyled themeObj={themeObj}>
                <SidebarTitle text={"Skills"}></SidebarTitle>
                {skillsData.map((skill, index) => (
                    <SkillsFragment
                        key={index}
                        textTitle={skill.title}
                        textProgress={skill.progress}
                        progress={skill.progress}
                    />
                ))}
            </SkillsStyled>
        </Fade>
    );
};

const SkillsStyled = styled.div<{ themeObj: ThemeObjectType }>`
  border-bottom: 1px solid ${({themeObj}) => themeObj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
