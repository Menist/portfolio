
import React from 'react';
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import {Fade} from "react-awesome-reveal";

type CardPortfolioPropsType={
    src:string
    srcSet:string
    overLay:string
    img:string
    type:string
}

export const TabCardPortfolio = (props: CardPortfolioPropsType) => {
    return (
        <Fade cascade damping={.9}>
            <CardLink href={'#'}>
                <CardImg src={props.src} srcSet={`${props.srcSet} 2x`}></CardImg>
                <HoverOverlay>
                    <OverlayImage src={props.overLay} srcSet={`${props.img} 2x`}></OverlayImage>
                    <OverlayImage></OverlayImage>
                </HoverOverlay>
            </CardLink>
        </Fade>
    );
};


const CardImg = styled.img`
    width: 100%;
`;

const CardLink = styled.a`
    width: 100%;
    background-size: cover;
    display: inline-block;
    position: relative;
    overflow: hidden;
`;

const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.accent};
    opacity: 0;
    transition: opacity .3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  
  &:hover{
    opacity: 1;
  }
`;

const OverlayImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(90deg) scale(1.3);
  }
`;