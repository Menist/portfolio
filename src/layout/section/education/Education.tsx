import React from 'react';
import styled from "styled-components";
import {EducationStyled} from "./EducationStyled";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import {Fade} from "react-awesome-reveal";

const itemsData = [
    {
        infoTitle: "University of Toronto",
        infoSubTitle: "Student",
        infoData: "Jan 1016 - Dec 2021",
        descriptionTitle: "Certificate of web training",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
    {
        infoTitle: "Programming Course",
        infoSubTitle: "Student",
        infoData: "Jan 1016 - Dec 2021",
        descriptionTitle: "Certificate of web training",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
    {
        infoTitle: "Web developer courses",
        infoSubTitle: "Student",
        infoData: "Jan 1016 - Dec 2021",
        descriptionTitle: "Certificate of web training",
        descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    }
];

export const Education = () => {
    return (
        <Fade cascade damping={.9}>
            <EducationSection id={'education'}>
                <BlockTitle title={'Education'}
                            subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}></BlockTitle>

                {itemsData.map((item, index)=>{
                    return <EducationStyled key={index}
                                            infoTitle={item.infoTitle} infoSubTitle={item.infoSubTitle}
                                            infoData={item.infoData} descriptionTitle={item.descriptionTitle}
                                            descriptionText={item.descriptionText}/>
                })}
                </EducationSection>
        </Fade>
);
}
const EducationSection = styled.section`
`
