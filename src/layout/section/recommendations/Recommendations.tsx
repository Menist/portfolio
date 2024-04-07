import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {RecommendationsCard} from "./card/RecommendationsCard";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import img1 from "../../../assets/img/section/recommendations/recommendations1.webp";
import img1x from "../../../assets/img/section@2x/recommendations/recom1_@2x.webp";
import img2 from "../../../assets/img/section/recommendations/recommendations2.webp";
import img2x from "../../../assets/img/section@2x/recommendations/recom2_@2x.webp";
import img3 from "../../../assets/img/section/recommendations/recommendations3.webp";
import img3x from "../../../assets/img/section@2x/recommendations/recom3_@2x.webp";
export const Recommendations = () => {
    return (
        <RecommendationsStyled>

            <BlockTitle
                title={"recommendations"}
                subTitle={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}></BlockTitle>
            <RecommendationsStyle>
                <RecommendationsCard
                    icon={"star"}
                    title={"Great Quality!"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                    name={"James Gouse"}
                    prof={"Graphic Designer"}
                    src={img1}
                    srcSet={img1x}
                />
                <RecommendationsCard
                    icon={"star"}
                    title={"Amazing work!"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                    name={"Tiana Philips"}
                    prof={"Photographer"}
                    src={img2}
                    srcSet={img2x}
                />
                <RecommendationsCard
                    icon={"star"}
                    title={"Great Quality!"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."}
                    name={"Talan Westervelt"}
                    prof={"Business man"}
                    src={img3}
                    srcSet={img3x}
                />
            </RecommendationsStyle>
            <FlexWrapper justify={"center"}>
            <RecommendationsBtn></RecommendationsBtn>
            <RecommendationsBtn></RecommendationsBtn>
            <RecommendationsBtn></RecommendationsBtn>
            </FlexWrapper>

        </RecommendationsStyled>
    );
};
const RecommendationsStyle = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  -webkit-column-gap: 20px;
  column-gap: 20px;
  row-gap: 20px;
  text-align: center;
`
const RecommendationsStyled = styled.section`
  @media screen and (max-width: 989px) {
    justify-content: center;
    max-width: none;
    flex: 0 0 100%;
  }

  @media screen and (max-width: 1500px) {
    ${FlexWrapper} {
      gap: 20px;
      max-width: none;
    }
  }
  @media screen and (max-width: 1009px) {
    ${FlexWrapper} {
      align-items: center;
      max-width: none;
    }
  }
`
const RecommendationsBtn = styled.button`
  background-color: #FFB400;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 50px 10px 0;
`