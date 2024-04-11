import React from 'react';
import styled from "styled-components";
import img1 from '../../../assets/img/section/main/mainImg.webp';
import img1x from "../../../assets/img/section@2x/main/mainImg_@2x.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {StraightLink} from "../../../components/StraightLink";
import Typewriter from 'typewriter-effect';

import img2 from '../../../assets/img/section/main/decoration/1.svg';
import img3 from '../../../assets/img/section/main/decoration/2.svg';
import img4 from '../../../assets/img/section/main/decoration/3.svg';
import img5 from '../../../assets/img/section/main/decoration/4.svg';
import img6 from '../../../assets/img/section/main/decoration/5.svg';
import img7 from '../../../assets/img/section/main/decoration/6.svg';
import img8 from '../../../assets/img/section/main/decoration/8.svg';
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../ThemeProvider";

export const AboutMe = () => {
    const { theme } = useTheme();
    return (
        <Fade cascade damping={.9}>
            <MainSection theme={theme}>
                <FlexWrapper align={"center"}
                             justify={"space-around"}
                             padding={"30px 50px 0 50px"}
                             >
                    <FlexWrapperDiw>

                        <Fade direction={"down"}>
                            <TextTitle theme={theme}>I’m Rayan Adlrdard
                                <p>I’m Rayan Adlrdard <span>Front-end</span> Developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['<span>Front-end</span> Developer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 150,
                                    }}
                                />
                            </TextTitle>
                        </Fade>
                        <Fade cascade damping={.2}>
                            <TextSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat
                                lobortis.
                                Natoque rutrum semper sed suspendisse nunc lectus.</TextSubTitle>
                        </Fade>
                        <Fade direction={"up"}>
                            <StraightLink textBtn={"hire me"}></StraightLink>
                        </Fade>
                    </FlexWrapperDiw>
                    <FlexWrapper flex={"1.5"} justify={"end"}>
                        <Img src={img1} srcSet={`${img1x} 2x`} />
                    </FlexWrapper>
                </FlexWrapper>
            </MainSection>
        </Fade>
    );
};


const FlexWrapperDiw = styled.div`
  display: flex;
  flex: 3;
  gap: 20px 0;
  flex-direction: column;
  @media screen and (max-width: 1271px) {
    align-self: center;
  }
`
const MainSection = styled.section`

  ${FlexWrapper}:first-child {
    background: url("${img2}") top 5% left 3% no-repeat,
    url("${img3}") top 10% left 55% no-repeat,
    url("${img4}") top 23% right 2% no-repeat,
    url("${img5}") bottom 5% left 8% no-repeat,
    url("${img6}") bottom 22% left 40% no-repeat,
    url("${img7}") bottom 10% left 58% no-repeat,
    url("${img8}") bottom 7% right 2% no-repeat;
    //background-color: white;
    background-color: ${({ theme }) => theme === 'dark' ? '#1E1E1E' : '#FFFFFF'};

  }

  @media screen and (max-width: 1156px) {
    ${FlexWrapper} {
      flex: 0 0 100%;
      justify-content: center;
      text-align: center;
      padding: 5px 5px 0 5px;
    }
  }
  @media screen and (max-width: 1271px) {
    ${FlexWrapper} {
      align-items: flex-end;
    }
  }

`
const TextTitle = styled.h1`
  p {
    display: none;
  }

  span {
    color: ${theme.colors.primary};
    // color: ${({ theme }) => theme === 'dark' ? '#FFB400' : '#000000'};
  }
`
const TextSubTitle = styled.p`
  font-size: 16px;
`

const Img = styled.img`
  height: auto;
  object-fit: cover;
  width: 100%;
  max-width: 325px;
`
