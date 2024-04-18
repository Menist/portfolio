import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ContactPropsType = {
    countryLabel: string
    countryValue: string
    cityLabel: string
    cityValue: string
    streetLabel: string
    streetAnswer: string
    showTitleInfo: boolean
    iconId: string
}
export const Contact = (props: ContactPropsType) => {
    const { themeobj } = useTheme();

    return (
        <ContactInformation themeobj={themeobj}>
            {props.showTitleInfo ? <ContactTitle>Contact information</ContactTitle> : null}
            <FlexWrapper
                direction={'column'}
                align={'center'}
                gap={'20px'}
                padding={'32px'}
                bgColor={themeobj.colors.backgroundColorSection}
                >
                <Icon
                    iconId={props.iconId}
                    width={40}
                    height={40}
                />
                
                <FlexWrapper
                    width={'100%'}
                    justify={'space-between'}
                    wrap={'nowrap'}>

                    <CountryLabel>{props.countryLabel}</CountryLabel >
                    <CountryValue>{props.countryValue}</CountryValue >
                </FlexWrapper>

                <FlexWrapper
                    width={'100%'}
                    justify={'space-between'}
                    wrap={'nowrap'}>

                    <CountryLabel >{props.cityLabel}</CountryLabel >
                    <CountryValue >{props.cityValue}</CountryValue >
                </FlexWrapper>

                <FlexWrapper
                    width={'100%'}
                    justify={'space-between'}
                    wrap={'nowrap'}>

                    <CountryLabel >{props.streetLabel}</CountryLabel >
                    <CountryValue >{props.streetAnswer}</CountryValue >
                </FlexWrapper>
            </FlexWrapper>
        </ContactInformation>
    );
};

const ContactInformation = styled.div<{themeobj: themeobjectType}>`
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
const CountryLabel  = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`
const CountryValue  = styled.span`
  font-size: 15px;
  text-transform: capitalize;
`

