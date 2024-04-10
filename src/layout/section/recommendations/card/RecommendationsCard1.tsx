import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type RecommendationsCardStyledPropsType = {
    icon: string
    title: string
    text: string
    name: string
    prof: string
    src: string
    srcSet: string
}

export const RecommendationsCard1 = (props: RecommendationsCardStyledPropsType) => {
    return (
        <FlexWrapperCard
            // maxWidth={"400px"}
            direction={"column"}
            align={"flex-start"}
            color={theme.colors.background}
            // flex={"0 1 auto"}
            padding={"25px"}
            // minWidth={"250px"}
        >
            <FlexWrapper>
                <Icon iconId={props.icon} height={"17.37"} width={"18"} />
                <Icon iconId={props.icon} height={"17.37"} width={"18"}/>
                <Icon iconId={props.icon} height={"17.37"} width={"18"}/>
                <Icon iconId={props.icon} height={"17.37"} width={"18"}/>
            </FlexWrapper>
            <RecommendationsCardTitle>{props.title}</RecommendationsCardTitle>
            <RecommendationsCardText>{props.text}</RecommendationsCardText>
            <FlexWrapperSelf>
                <RecommendationsCardImg  src={props.src} srcSet={`${props.srcSet} 2x`}/>
                <FlexWrapperAuthor>
                    <RecommendationsCardName>{props.name}</RecommendationsCardName>
                    <RecommendationsCardProfession>{props.prof}</RecommendationsCardProfession>
                </FlexWrapperAuthor>
            </FlexWrapperSelf>
        </FlexWrapperCard>
    );
};

const FlexWrapperAuthor=styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
`
const FlexWrapperSelf=styled.div`

  display: flex;
  align-items: center;
  
  @media screen and (max-width: 1368px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
`

const RecommendationsCardTitle = styled.h4`
  font-weight: 500;
`
const RecommendationsCardText = styled.p`
  text-align: left;
  line-height: 24px;
`
const RecommendationsCardImg = styled.img``
const RecommendationsCardName = styled(RecommendationsCardTitle)`
`
const RecommendationsCardProfession = styled.span`
  font-weight: 500;
  text-align: left;
  
  //@media screen and (max-width: 1440px) {
  //  align-self: flex-start;
  //}
  //@media screen and (max-width: 746px) {
  //  align-self: center;
  //}
`
const FlexWrapperCard = styled(FlexWrapper)`
  margin-right: 20px;

  // @media screen and (max-width: 1220px) {
  //  padding: 10px;
  // }
  // @media screen and (max-width: 1009px) {
  //   padding: 20px;
  // }
  //
  // @media screen and (max-width: 746px) {
  //   ${FlexWrapper} {
  //     justify-content: center;
  //   }
  // }

`



