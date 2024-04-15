import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

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
    const { themeObj } = useTheme();

    return (
        <ContactInformation themeObj={themeObj}>
            {props.showTitleInfo ? <ContactTitle>Contact information</ContactTitle> : null}
            <FlexWrapper
                direction={'column'}
                align={'center'}
                gap={'20px'}
                padding={'32px'}
                bgColor={themeObj.colors.backgroundColorSection}
                >
                <Icon
                    iconId={props.iconId}
                    width={"40"}
                    height={"40"}
                />
                
                <FlexWrapper
                    width={'100%'}
                    justify={'space-between'}
                    wrap={'nowrap'}>

                    <Adress>{props.country}</Adress>
                    <AdressAnswer>{props.countryAnswer}</AdressAnswer>
                </FlexWrapper>

                <FlexWrapper
                    width={'100%'}
                    justify={'space-between'}
                    wrap={'nowrap'}>

                    <Adress>{props.city}</Adress>
                    <AdressAnswer>{props.cityAnswer}</AdressAnswer>
                </FlexWrapper>

                <FlexWrapper
                    width={'100%'}
                    justify={'space-between'}
                    wrap={'nowrap'}>

                    <Adress>{props.street}</Adress>
                    <AdressAnswer>{props.streetAnswer}</AdressAnswer>
                </FlexWrapper>
            </FlexWrapper>
        </ContactInformation>
    );
};

const ContactInformation = styled.div<{themeObj: ThemeObjectType}>`
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

