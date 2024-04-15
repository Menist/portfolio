import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {PriceCardBtn} from "../PriceCardBtn";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

type PriceCardPropType = {
    name: string
    price: string
    description: string
    iconId: string
    services: string
    height: string
    width: string
    span: string
}

export const PriceCard = (props: PriceCardPropType) => {
    const { themeObj } = useTheme();
    return (
        <PriceCardStyled themeObj={themeObj}>
            <Fade direction={"up"}>
                <PlansName>{props.name}</PlansName>
                <PlansPrice themeObj={themeObj}>{props.price}
                    <span>{props.span}</span>
                </PlansPrice>
                <PlansDescription>{props.description}</PlansDescription>
                <FlexWrapper gap={"10"} direction={"column"} width={"100%"}>
                    <FlexWrapper justify={"center"} width={"100%"} padding={"15px 0 0 10px"}>
                        <Icon iconId={props.iconId} height={props.height} width={props.width}/>
                        <PriceServices>{props.services}</PriceServices>
                    </FlexWrapper>
                    <FlexWrapper justify={"center"} width={"100%"} padding={"15px 0 0 10px"}>
                        <Icon iconId={props.iconId} height={props.height} width={props.width}/>
                        <PriceServices>{props.services}</PriceServices>
                    </FlexWrapper>
                    <FlexWrapper justify={"center"} width={"100%"} padding={"15px 0 0 10px"}>
                        <Icon iconId={props.iconId} height={props.height} width={props.width}/>
                        <PriceServices>{props.services}</PriceServices>
                    </FlexWrapper>
                    <FlexWrapper justify={"center"} width={"100%"} padding={"15px 0 0 10px"}>
                        <Icon iconId={props.iconId} height={props.height} width={props.width}/>
                        <PriceServices>{props.services}</PriceServices>
                    </FlexWrapper>
                </FlexWrapper>
                <PriceCardBtn textBtn={"order now"}></PriceCardBtn>
                </Fade>
        </PriceCardStyled>

    );
};
const PriceCardStyled = styled.div<{themeObj: ThemeObjectType}>`
  background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 30px 25px 35px;
  gap: 20px;
  position: relative;
  min-width: 310px;
  flex: 1 0 30%;
  max-width: 500px;

  ${FlexWrapper} {
    padding-top: 10px;
  }

  svg {
    align-self: center;
  }

  &:nth-child(2)::before {
    content: "most popular";
    width: 100%;
    display: inline-block;
    background-color: ${({themeObj}) =>themeObj.colors.primary};
    padding: 5px 0;
    font-size: 15px;
    position: absolute;
    left: 0;
    top: 0;
    text-transform: capitalize;
    color: ${({themeObj}) =>themeObj.colors.headerText};
    text-align: center;
  }

  @media screen and (max-width: 1461px) {
    min-width: 270px;
  }

  @media screen and (max-width: 1440px) {
    ${FlexWrapper} {
      flex: 1 0 20%;
    }
  }

  @media screen and (max-width: 1340px) {
    flex: 1 0 45%;
  }
}

@media screen and (max-width: 1129px) {
  flex: 1 0 65%;
  ${FlexWrapper} {
    justify-content: center;
  }
}

@media screen and (max-width: 1091px) {
  flex: 1 0 45%;
}

@media screen and (max-width: 943px) {
  flex: 1 0 75%;
}

@media screen and (max-width: 885px) {
  flex: 1 0 40%;
  justify-content: flex-start;
}

@media screen and (max-width: 636px) {
  flex: 1 0 100%;
}
`

const PlansName = styled.h3`
  font-weight: 600;
  text-transform: capitalize;
`
const PlansPrice = styled.span<{themeObj: ThemeObjectType}>`
  font-size: 32px;
  font-weight: 700;
  color: ${({themeObj}) =>themeObj.colors.headerText};
  

  > span {
    font-size: ${({themeObj}) =>themeObj.text.textSize};
    font-weight: 400;
    text-transform: capitalize;
    padding-left: 10px;
  }

`
const PriceServices = styled.div`
`
const PlansDescription = styled.p`
  text-align: center;
  text-transform: capitalize;
`
