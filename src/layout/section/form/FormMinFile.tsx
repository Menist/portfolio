import React from 'react';
import {Form} from "./formElement/Form";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./formElement/Contact";
import {Fade} from "react-awesome-reveal";

const itemsData = [
    {
        iconId: "address",
        showTitleInfo: true,
        country: 'Country',
        countryAnswer: 'Bangladesh',
        city: 'City',
        cityAnswer: 'Dhaka',
        street: "Streat",
        streetAnswer: '35 vhatara, Badda'
    },
    {
        iconId: "email",
        showTitleInfo: false,
        country: 'Email:',
        countryAnswer: 'youremail@gmail.com',
        city: 'Skype:',
        cityAnswer: '@yourusername',
        street: "Telegram:",
        streetAnswer: '@yourusername',
    },
    {
        iconId:"tel",
        showTitleInfo:false,
        country:'Support services:',
        countryAnswer:'15369',
        city:'Office:',
        cityAnswer:'+58 (021)356 587 235',
        street:"Personal:",
        streetAnswer:'+58 (021)356 587 235'
    }
]

export const FormMainFile = () => {
    return (
        <Fade cascade damping={19}>
            <FormMainFileSection id={'contacts'}>
                <FlexWrapper justify={"space-between"}>
                    <Form></Form>
                    <FlexWrapper direction={"column"} wrap={"nowrap"}>
                        {itemsData.map((item, index)=>{
                            return <Contact
                                countryLabel={item.country}
                                countryValue={item.countryAnswer}
                                cityLabel={item.city}
                                cityValue={item.cityAnswer}
                                streetLabel={item.street}
                                streetAnswer={item.streetAnswer}
                                showTitleInfo={item.showTitleInfo}
                                iconId={item.iconId}
                            key={index}
                            />
                        })}
                    </FlexWrapper>
                </FlexWrapper>
            </FormMainFileSection>
        </Fade>
    );
};

const FormMainFileSection = styled.section`
  margin-top: 70px;

  @media screen and (max-width: 1209px) {
    ${FlexWrapper} {
      flex: 1 0 100%;
    }
  }
`
