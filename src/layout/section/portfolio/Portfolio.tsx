import React from 'react';
import styled from "styled-components";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import {CardPortfolio} from "./cardPortfolio/CardPortfolio";
import {MenuPortfolio} from "./navigationPortfolio/MenuPortfolio";
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

export const Portfolio = () => {
    return (
        <PortfolioSection id={'portfolio'}>
            <BlockTitle title={'Portfolio'}
                        subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}></BlockTitle>
            <MenuPortfolio></MenuPortfolio>
            <Container>
                <CardPortfolio src={img1} srcSet={img1x} overLay={img0} img={img0x}></CardPortfolio>
                <CardPortfolio src={img2} srcSet={img2x} overLay={img0} img={img0x}></CardPortfolio>
                <CardPortfolio src={img3} srcSet={img3x} overLay={img0} img={img0x}></CardPortfolio>
                <CardPortfolio src={img4} srcSet={img4x} overLay={img0} img={img0x}></CardPortfolio>
                <CardPortfolio src={img5} srcSet={img5x} overLay={img0} img={img0x}></CardPortfolio>
                <CardPortfolio src={img6} srcSet={img6x} overLay={img0} img={img0x}></CardPortfolio>
            </Container>
        </PortfolioSection>
    );
};

const PortfolioSection = styled.section``
const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit,minmax(230px,1fr));
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 10px;
`