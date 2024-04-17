import React from 'react';
import styled from "styled-components";
import {CardLink} from "../../../../components/Link";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {motion} from "framer-motion";

type BlogCardPropsType = {
    title: string
    text: string
    textLink: string
    src: string
    srcSet: string
}
export const BlogCard = (props: BlogCardPropsType) => {
    const { themeObj } = useTheme();

    return (
                <BlogCardStyled>
                    <BlogCardImg image={props.src} srcSet={props.srcSet}/>
                    <BlogCardWrapper themeObj={themeObj}>
                        <BlogCardTitle >{props.title}</BlogCardTitle>
                        <BlogCardText>{props.text}</BlogCardText>
                        <CardLink link={"Lean more"}></CardLink>
                    </BlogCardWrapper>
                </BlogCardStyled>
    );
};

const BlogCardStyled = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 0 0 31.5%;

  a {
    padding-top: 0;
    font-size: 18px;
  }

  @media screen and (max-width: 1420px) {
    flex: 0 0 48%;
  }

  @media screen and (max-width: 1170px) {
    flex: 0 0 90%;
    align-items: center;
  }
`
const BlogCardWrapper = styled.div<{themeObj: ThemeObjectType}>`
  padding: 25px;
  background-color: ${ ({themeObj}) => themeObj.colors.backgroundColorSection};

  a {
    display: inline-block;
  }
`
const BlogCardTitle = styled.h4`
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap
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


