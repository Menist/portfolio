import React, {useState} from 'react';
import styled from "styled-components";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import {TabCardPortfolio} from "./cardPortfolio/TabCardPortfolio";
import img0 from "../../../assets/img/section/portfolio/OverlayPortfolio.webp";
import img0x from "../../../assets/img/section@2x/portfolio/OverlayPortfolio_@2x.webp";
import img1 from "../../../assets/img/section/portfolio/01.webp";
import img1x from "../../../assets/img/section@2x/portfolio/portfolio1_@2x.webp";
import img2 from "../../../assets/img/section/portfolio/02.webp";
import img2x from "../../../assets/img/section@2x/portfolio/portfolio2_@2x.webp";
import img3 from "../../../assets/img/section/portfolio/03.webp";
import img3x from "../../../assets/img/section@2x/portfolio/portfolio3_@2x.webp";
import img4 from "../../../assets/img/section/portfolio/04.webp";
import img4x from "../../../assets/img/section@2x/portfolio/portfolio4_@2x.webp";
import img5 from "../../../assets/img/section/portfolio/05.webp";
import img5x from "../../../assets/img/section@2x/portfolio/portfolio5_@2x.webp";
import img6 from "../../../assets/img/section/portfolio/06.webp";
import img6x from "../../../assets/img/section@2x/portfolio/portfolio6_@2x.webp";
import {Fade} from "react-awesome-reveal";
import {MenuTab} from "./navigationPortfolio/TabPortfolioData";

const projects = [
    {src: img1, type: 'spa', srcSet: img1x, overLay: img0, img: img0x},
    {src: img2, type: 'react', srcSet: img2x, overLay: img0, img: img0x},
    {src: img3, type: 'spa', srcSet: img3x, overLay: img0, img: img0x},
    {src: img4, type: 'landing page', srcSet: img4x, overLay: img0, img: img0x},
    {src: img5, type: 'landing page', srcSet: img5x, overLay: img0, img: img0x},
    {src: img6, type: 'spa', srcSet: img6x, overLay: img0, img: img0x},
]
export const TabPortfolio = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');

    let filteredProjects = projects

    if (currentFilterStatus !== 'all') {
        filteredProjects = projects.filter(project => project.type === currentFilterStatus)
    }

    return (
        <Fade cascade damping={.9}>
            <PortfolioSection id={'portfolio'}>
                <BlockTitle title={'Portfolio'}
                            subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}></BlockTitle>

                <MenuTab changeFilter={setCurrentFilterStatus}/>

                <Container>
                    <Fade cascade={true} damping={.2}>
                        {filteredProjects.map(project => (
                            <TabCardPortfolio type={project.type}
                                              src={project.src}
                                              srcSet={img1x}
                                              overLay={img0}
                                              img={img0x}/>
                        ))}

                    </Fade>

                </Container>
            </PortfolioSection>
        </Fade>
    );
};

const PortfolioSection = styled.section``
const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 10px;
`