import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type ContactPropsType = {
    country: string
    countryAnswer: string
    city: string
    cityAnswer: string
    street: string
    streetAnswer: string
    showTitleInfo: boolean
    iconId: string
}
export const Contact = (props: ContactPropsType) => {
    return (
        <ContactInformatiosdasfn>
            {props.showTitleInfo ? <ContactTitle>Contact information</ContactTitle> : null}
            <FlexWrapper direction={"column"} align={"center"} padding={"32px"}
                         color={theme.colors.background}>
                <Icon iconId={props.iconId} width={"40"} height={"40"}/>
                <Wrap>
                    <Adress>{props.country}</Adress>
                    <AdressAnswer>{props.countryAnswer}</AdressAnswer>
                </Wrap>
                <Wrap>
                    <Adress>{props.city}</Adress>
                    <AdressAnswer>{props.cityAnswer}</AdressAnswer>
                </Wrap>
                <Wrap>
                    <Adress>{props.street}</Adress>
                    <AdressAnswer>{props.streetAnswer}</AdressAnswer>
                </Wrap>
            </FlexWrapper>
        </ContactInformatiosdasfn>
    );
};
const ContactInformatiosdasfn = styled.div`
  max-width: 500px;
  @media screen and (max-width: 1209px) {
    margin: 0 auto;
    width: 100%;
  }
 
`
const ContactTitle = styled.h2`
  text-transform: capitalize;
  margin-bottom: 50px;

  @media screen and (max-width: 1209px) {
    text-align: center;
  }
`
const Adress = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`
const AdressAnswer = styled.span`
  font-size: 15px;
  text-transform: capitalize;
`
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
 
`
