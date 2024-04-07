//отрисовка всей секции My services
import React from 'react';
import styled from "styled-components";
import {ServicesCard} from "./card/ServicesCard";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";

export const Services = () => {
    return (
        <ServicesSection id={'services'}>
            <BlockTitle title={"my services"}
                        subTitle={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}></BlockTitle>
            <Container>
                <ServicesCard
                    iconId={"webDevelopment"}
                    title={"web development"}
                    text={"blog, e-commerce"}
                    link={''}
                />
                <ServicesCard
                    iconId={"uIuxDesign"}
                    title={"uI/uX design"}
                    text={"Mobile app, website design"}
                    link={''}
                />
                <ServicesCard
                    iconId={"soundDesign"}
                    title={"sound design"}
                    text={"Voice Over, Beat Making"}
                    link={''}
                />
                <ServicesCard
                    iconId={"gameDesign\n"}
                    title={"game design"}
                    text={"Character Design, Props & Objects"}
                    link={''}
                />
                <ServicesCard
                    iconId={"photography"}
                    title={"photography"}
                    text={"portrait, product photography"}
                    link={''}
                />
                <ServicesCard
                    iconId={""}
                    title={"advertising"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."}
                    link={'order now'}
                />
            </Container>
        </ServicesSection>
    );
};
const ServicesSection = styled.section`
  text-align: center;
`
const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit,minmax(231px,1fr));
  column-gap: 20px;
  row-gap: 20px;
  
  @media screen and (max-width: 969px) {
    justify-items: center;
  }
`
