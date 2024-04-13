import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";


type RecommendationsCardStyledPropsType = {
    icon: string
    title: string
    text: string
    name: string
    prof: string
    src: string
    srcSet: string
}

export const RecommendationsCard = (props: RecommendationsCardStyledPropsType) => {
    const { meow } = useTheme();
    return (
        <RecommendationsCardFlexWrapper meow={meow}>
            <Icon iconId={props.icon} height={"17.37"} width={"18"}/>
            <Icon iconId={props.icon} height={"17.37"} width={"18"}/>
            <Icon iconId={props.icon} height={"17.37"} width={"18"}/>
            <Icon iconId={props.icon} height={"17.37"} width={"18"}/>
            <RecommendationsCardTitle>{props.title}</RecommendationsCardTitle>
            <RecommendationsCardText>{props.text}</RecommendationsCardText>
            <RecommendationsCardImg src={props.src} srcSet={`${props.srcSet} 2x`}/>
            <FlexWrapper
                gap={'0'}
                direction={'column'}
                justify={"center"}
            >
                <RecommendationsCardName>{props.name}</RecommendationsCardName>
                <RecommendationsCardProfession>{props.prof}</RecommendationsCardProfession>
            </FlexWrapper>
        </RecommendationsCardFlexWrapper>
    );
};


const RecommendationsCardFlexWrapper=styled.div<{meow: ThemeObjectType}>`
  display: flex;
  min-width: 290px;
  flex-wrap: wrap;
  padding: 25px;
  background-color: ${({meow}) =>meow.colors.backgroundColorSection};
  gap: 15px;
  align-items: stretch;
  margin-right: 20px;
  
  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`
const RecommendationsCardTitle = styled.h4`
  font-weight: 500;
  width: 100%;
`
const RecommendationsCardText = styled.p`
  text-align: left;
  line-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`
const RecommendationsCardImg = styled.img``
const RecommendationsCardName = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #2B2B2B;
`
const RecommendationsCardProfession = styled.span`
  font-weight: 500;
  text-align: left;
`

