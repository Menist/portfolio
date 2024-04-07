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
import '../../../styles/slider.css';
import {RecommendationsCard} from "./card/RecommendationsCard";

const items = [
    <RecommendationsCard
        icon={"star"}
        title={"Great Quality!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet.... "}
        name={"James Gouse"}
        prof={"Graphic Designer"}
        src={img1}
        srcSet={img1x}
    />,
    <RecommendationsCard
        icon={"star"}
        title={"Amazing work!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"Tiana Philips"}
        prof={"Photographer"}
        src={img2}
        srcSet={img2x}
    />,
    <RecommendationsCard
        icon={"star"}
        title={"Great Quality!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"Talan Westervelt"}
        prof={"Business man"}
        src={img3}
        srcSet={img3x}
    />,    <RecommendationsCard
        icon={"star"}
        title={"Great Quality!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"James Gouse"}
        prof={"Graphic Designer"}
        src={img1}
        srcSet={img1x}
    />,
    <RecommendationsCard
        icon={"star"}
        title={"Amazing work!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"Tiana Philips"}
        prof={"Photographer"}
        src={img2}
        srcSet={img2x}
    />,
    <RecommendationsCard
        icon={"star"}
        title={"Great Quality!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"Talan Westervelt"}
        prof={"Business man"}
        src={img3}
        srcSet={img3x}
    />,
    <RecommendationsCard
        icon={"star"}
        title={"Great Quality!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"James Gouse"}
        prof={"Graphic Designer"}
        src={img1}
        srcSet={img1x}
    />,
    <RecommendationsCard
        icon={"star"}
        title={"Amazing work!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"Tiana Philips"}
        prof={"Photographer"}
        src={img2}
        srcSet={img2x}
    />,
    <RecommendationsCard
        icon={"star"}
        title={"Great Quality!"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
        name={"Talan Westervelt"}
        prof={"Business man"}
        src={img3}
        srcSet={img3x}
    />
];
const responsive = {
    900: {items: 1},
    1200: {items: 2},
    1440: {items: 3},
    3000: {items: 5},
};

export const Slider = () => (
    <RecommendationsStyled>
        <BlockTitle
            title={"recommendations"}
            subTitle={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}></BlockTitle>
        <AliceCarousel
            responsive={responsive}
            // autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1500}
            animationDuration={1500}
            // animationType="fadeout"
            // infinite
            touchTracking={false}
            disableButtonsControls
            items={items}
        />
    </RecommendationsStyled>
);

const RecommendationsStyled = styled.section`
  //max-width: 1600px;
  //height: 620px;
  //position: relative;
  //width: 100%;
  //top: 0;
  //left: 0;
  //overflow: hidden;

  //@media screen and (max-width: 800px) {  
  //  height: 600px;
  //}
  //@media screen and (max-width: 500px) {
  //  height: 520px;
  //}
  //@media screen and (max-width: 435px) {
  //  height: 540px;
  //}
`
