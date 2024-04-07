import React from 'react';
import styled from "styled-components";
import {BlogCard} from "./card/BlogCard";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import img1 from "../../../assets/img/section/blog/blog01.webp";
import img1x from "../../../assets/img/section@2x/blog/blog1_@2x.webp";
import img2 from "../../../assets/img/section/blog/blog02.webp";
import img2x from "../../../assets/img/section@2x/blog/blog2_@2x.webp";
import img3 from "../../../assets/img/section/blog/blog03.webp";
import img3x from "../../../assets/img/section@2x/blog/blog3_@2x.webp";



export const Blog = () => {
    return (
        <BlogSection id={'blog'}>
            <BlockTitle title={'blog'} subTitle={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}></BlockTitle>
            <FlexWrapper justify={"space-between"}>
            <BlogCard
                src={img1}
                srcSet= {img1x}
                title={"How to make web tempates"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}
                textLink={"Learn more"}
            />
            <BlogCard
                src={img2}
                srcSet={img2x}
                title={"make Business card"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}
                textLink={"Learn more"}
            />
            <BlogCard
                src={img3}
                srcSet={img3x}
                title={"How to make Flyer Design"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "}
                textLink={"Learn more"}
            />
            </FlexWrapper>
        </BlogSection>
    );
};



const BlogSection = styled.section`
  ${FlexWrapper} {
    @media screen and (max-width: 989px) {
      justify-content: center;
      flex: 0 0 100%;
    }
    }
  @media screen and (max-width: 885px) {
    max-width: 65%;
    margin: 0 auto;
  }
  @media screen and (max-width: 885px) {
    max-width: 80%;
  }
  @media screen and (max-width: 556px) {
    max-width: 100%;
  }
`