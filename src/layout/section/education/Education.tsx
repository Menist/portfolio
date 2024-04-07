import React from 'react';
import styled from "styled-components";
import {EducationStyled} from "./EducationStyled";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";

export const Education = () => {
    return (
        <EducationSection id={'education'}>
            <BlockTitle title={'Education'} subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}></BlockTitle>
                <EducationStyled
                    firstTitle={"University of Toronto"}
                    subTitle={"Student"}
                    data={"Jan 1016 - Dec 2021"}
                    secondTitle={"Certificate of web training"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
            <EducationStyled
                firstTitle={"Programming Course"}
                subTitle={"Student"}
                data={"Jan 1016 - Dec 2021"}
                secondTitle={"Certificate of web training"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
            <EducationStyled
                firstTitle={"Web developer courses"}
                subTitle={"Student"}
                data={"Jan 1016 - Dec 2021"}
                secondTitle={"Certificate of web training"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}/>
        </EducationSection>


    );
};
const EducationSection = styled.section`
    
`
