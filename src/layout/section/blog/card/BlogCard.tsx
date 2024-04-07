import React from 'react';
import styled from "styled-components";
import {CardLink} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

type BlogCardPropsType = {
    title: string
    text: string
    textLink: string
    src: string
    srcSet: string
}
export const BlogCard = (props: BlogCardPropsType) => {
    return (
        <BlogCardStyled>
            <BlogCardImg image={props.src} srcSet={props.srcSet}/>
            <Wrapper>
                <BlogCardTitle>{props.title}</BlogCardTitle>
                <BlogCardText>{props.text}</BlogCardText>
                <CardLink link={"Lean more"}></CardLink>
            </Wrapper>
        </BlogCardStyled>
    );
};
const BlogCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 31.5%;
  //min-width: 330px;
  //max-width: 415px;
  flex-wrap: wrap;

  a {
    padding-top: 0;
    font-size: 18px;
  }

  @media screen and (max-width: 1216px) {
    flex: 0 0 48%;
    //min-width: 355px;
  }

  @media screen and (max-width: 989px) {
    flex: 0 0 80%;
    justify-content: center;
  }
  @media screen and (max-width: 969px) {
    flex: 0 0 100%;
    justify-content: center;
  }

`
const BlogCardTitle = styled.h4`
  font-weight: 500;
  text-transform: capitalize;
`
const BlogCardText = styled.p`
  font-weight: 400;
  padding: 10px 0;
`

const BlogCardImg = styled.div<{ image: string, srcSet: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 100%;

  @media (min-resolution: 2dppx) {
    background-image: ${(props) => `url(${props.srcSet})`};
  }
`
const Wrapper = styled.div`
  padding: 25px;
  background-color: ${theme.colors.background};

  a {
    display: inline-block;
  }
`
