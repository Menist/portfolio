import React from 'react';
import styled from "styled-components";
import {FlexWrapper, FlexWrapperStyled} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";

type ContactInformationPropsType = {
    country: string
    countryAnswer: string
    city: string
    cityAnswer: string
    street: string
    streetAnswer: string
    showTitleInfo: boolean
    iconId: string
}

export const ContactInformation = (props: ContactInformationPropsType) => {
    const { meow } = useTheme();

    return (
        <ContactInformationSection>
            {props.showTitleInfo ? <TitleInfo>Contact information</TitleInfo> : null}
            <ContactInformationCard meow={meow}>
                <FlexWrapper justify={"center"} padding={"0 0 30px 0"}>
                    <Icon iconId={props.iconId} width={"40"} height={"40"}/>
                </FlexWrapper>
                <FlexWrapper gap={"0"} justify={"space-between"}>
                    <FlexWrapper gap={'0'} justify={"center"} width={"100%"}>
                        <FlexWrapper justify={"space-between"} width={"100%"} maxWidth={"300px"}>
                            <Adress>{props.country}</Adress>
                            <AdressAnswer>{props.countryAnswer}</AdressAnswer>
                        </FlexWrapper>
                        <FlexWrapper justify={"space-between"} width={"100%"} maxWidth={"300px"}>
                            <Adress>{props.city}</Adress>
                            <AdressAnswer>{props.cityAnswer}</AdressAnswer>
                        </FlexWrapper>
                        <FlexWrapper justify={"space-between"} width={"100%"} maxWidth={"300px"}>
                            <Adress>{props.street}</Adress>
                            <AdressAnswer>{props.streetAnswer}</AdressAnswer>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </ContactInformationCard>
        </ContactInformationSection>
    );
};
const ContactInformationCard = styled.div<{meow: ThemeObjectType}>`
  background-color: ${({meow}) =>meow.colors.backgroundColorSection};
  padding: 25px;
  
@media screen and (max-width: 1235px) {
  ${FlexWrapperStyled} {
    background-color: #F0F0F6;
  }
}
  @media screen and (max-width: 1091px) {
    ${FlexWrapperStyled} {
      justify-content: flex-start;
       svg{
         justify-content: center;
    }
  }
}
`
const ContactInformationSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 315px;
  @media screen and (max-width: 1235px) {
    margin: 0 auto;
  }

  & > :first-child {
    @media screen and (max-width: 1235px) {
      align-items: center;
    }
  }

  @media screen and (max-width: 3000px) {
    max-width: 500px;
  }

  @media screen and (max-width: 1091px) {
    ${FlexWrapperStyled} {
    svg{
      margin: 10px 0;
    }
      ${FlexWrapperStyled} {
        flex-direction: row;
        justify-content: center;
      }
    }
  }


  @media screen and (max-width: 1066px) {
    ${FlexWrapperStyled} {
      ${FlexWrapperStyled} {
        padding-top: 0;
      }
    }
  }
`
const Adress = styled.span`
  padding-bottom: 15px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  @media screen and (max-width: 1066px) {
    padding-bottom: 0;

  }
`
const AdressAnswer = styled.span`
  padding-bottom: 15px;
  font-size: 15px;
  text-transform: capitalize;

  @media screen and (max-width: 1066px) {
    padding-bottom: 15px;
  }
`
const TitleInfo = styled.h2`
  padding-bottom: 50px;
  text-transform: capitalize;
  
  @media screen and (max-width: 3000px) {
    align-items: flex-start;
  }
  
  @media screen and (max-width: 1235px) {
    background-color: inherit;
    text-align: center;
  }
`