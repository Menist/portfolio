import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {useTheme} from "../../../../ThemeProvider";


type RecommendationsCardStyledPropsType = {
    iconType: string
    cardTitle: string
    cardDescription: string
    personName: string
    profession: string
    imageSrc: string
    imageSrcSet: string
}

export const RecommendationsCard = (props: RecommendationsCardStyledPropsType) => {
    const { themeObj } = useTheme();
    return (
        <FlexWrapper themeObj={themeObj}
                     bgColor={themeObj.colors.backgroundColorSection}
                     minWidth={'290px'}
                     wrap={'wrap'}
                     padding={'25px'}
                     gap={'15px'}
                     marginRight={'20px'}
                     align={'stretch'}
        >
            <Icon iconId={props.iconType} height={"17.37"} width={"18"}/>
            <Icon iconId={props.iconType} height={"17.37"} width={"18"}/>
            <Icon iconId={props.iconType} height={"17.37"} width={"18"}/>
            <Icon iconId={props.iconType} height={"17.37"} width={"18"}/>
            <RecommendationsCardTitle>{props.cardTitle}</RecommendationsCardTitle>
            <RecommendationsCardText>{props.cardDescription}</RecommendationsCardText>
            <RecommendationsCardImg src={props.imageSrc} srcSet={`${props.imageSrcSet} 2x`}/>
            <FlexWrapper
                gap={'0'}
                direction={'column'}
                justify={"center"}
            >
                <RecommendationsCardName>{props.personName}</RecommendationsCardName>
                <RecommendationsCardProfession>{props.profession}</RecommendationsCardProfession>
            </FlexWrapper>
        </FlexWrapper>
    );
};

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

