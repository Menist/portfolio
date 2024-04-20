import React from 'react';
import styled from "styled-components";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import img1 from "../../../assets/img/section/recommendations/recommendations1.webp";
import img1x from "../../../assets/img/section@2x/recommendations/recom1_@2x.webp";
import img2 from "../../../assets/img/section/recommendations/recommendations2.webp";
import img2x from "../../../assets/img/section@2x/recommendations/recom2_@2x.webp";
import img3 from "../../../assets/img/section/recommendations/recommendations3.webp";
import img3x from "../../../assets/img/section@2x/recommendations/recom3_@2x.webp";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {RecommendationsCard} from "./card/RecommendationsCard";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../ThemeProvider";
import {themeobjectType} from "../../../styles/ColorSheme";

const items = [
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Great Quality!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet.... "}
        personName={"James Gouse"}
        profession={"Graphic Designer"}
        imageSrc={img1}
        imageSrcSet={img1x}
    />,
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Amazing work!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"Tiana Philips"}
        profession={"Photographer"}
        imageSrc={img2}
        imageSrcSet={img2x}
    />,
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Great Quality!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"Talan Wetevelt"}
        profession={"Business man"}
        imageSrc={img3}
        imageSrcSet={img3x}
    />, <RecommendationsCard
        iconType={"star"}
        cardTitle={"Great Quality!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"James Gouse"}
        profession={"Graphic Designer"}
        imageSrc={img1}
        imageSrcSet={img1x}
    />,
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Amazing work!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"Tiana Philips"}
        profession={"Photographer"}
        imageSrc={img2}
        imageSrcSet={img2x}
    />,
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Great Quality!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"Talan Wetevelt"}
        profession={"Business man"}
        imageSrc={img3}
        imageSrcSet={img3x}
    />,
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Great Quality!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"James Gouse"}
        profession={"Graphic Designer"}
        imageSrc={img1}
        imageSrcSet={img1x}
    />,
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Amazing work!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"Tiana Philips"}
        profession={"Photographer"}
        imageSrc={img2}
        imageSrcSet={img2x}
    />,
    <RecommendationsCard
        iconType={"star"}
        cardTitle={"Great Quality!"}
        cardDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        personName={"Talan Wetevelt"}
        profession={"Business man"}
        imageSrc={img3}
        imageSrcSet={img3x}
    />
];
const responsive = {
    900: {items: 1},
    1200: {items: 2},
    1440: {items: 3},
    3000: {items: 5},
};

export const RecommendationsSlider = () => {
    const {themeobj} = useTheme();
    return (
        <Fade cascade damping={.3}>
            <RecommendationsStyled themeobj={themeobj}>
                <BlockTitle
                    title={"recommendations"}
                    subTitle={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}></BlockTitle>
                <AliceCarousel
                    responsive={responsive}
                    // autoPlay
                    autoPlayStrategy="none"
                    autoPlayInterval={1500}
                    animationDuration={1500}
                    infinite
                    touchTracking={false}
                    disableButtonsControls
                    items={items}
                />
            </RecommendationsStyled>
        </Fade>
    );
};

const RecommendationsStyled = styled.section<{ themeobj: themeobjectType }>`
  .alice-carousel {
    max-width: calc(99vw - 480px);
  }

  @media screen and (max-width: 1091px) {
    .alice-carousel {
      max-width: calc(100vw - 370px);
    }
  }

  @media screen and (max-width: 800px) {
    .alice-carousel {
      max-width: calc(100vw - 60px);
    }
  }

  .alice-carousel__wrapper {
    width: 100%;
  }

  .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
    background-color: ${({themeobj}) => themeobj.colors.primary};
  }
`
