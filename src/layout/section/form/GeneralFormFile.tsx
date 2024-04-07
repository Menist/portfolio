import React from 'react';
import {Form} from "./formElement/Form";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./formElement/Contact";

export const GeneralFormFile = () => {
    return (
        <GeneralFormFileSection id={'contacts'}>
            <FlexWrapper justify={"space-between"}>
                <Form></Form>
                <FlexWrapper direction={"column"} wrap={"nowrap"}>
                    <Contact iconId={"address"}
                             showTitleInfo={true}
                             country={'Country'}
                             countryAnswer={'Bangladesh'}
                             city={'City'}
                             cityAnswer={'Dhaka'}
                             street={"Streat"}
                             streetAnswer={'35 vhatara, Badda'}
                    ></Contact>
                    <Contact iconId={"email"}
                                         showTitleInfo={false}
                                         country={'Email:'}
                                         countryAnswer={'youremail@gmail.com'}
                                         city={'Skype:'}
                                         cityAnswer={'@yourusername'}
                                         street={"Telegram:"}
                                         streetAnswer={'@yourusername'}
                    ></Contact>
                    <Contact iconId={"tel"}
                                     showTitleInfo={false}
                                     country={'Support services:'}
                                     countryAnswer={'15369'}
                                     city={'Office:'}
                                     cityAnswer={'+58 (021)356 587 235'}
                                     street={"Personal:"}
                                     streetAnswer={'+58 (021)356 587 235'}
                ></Contact>
                </FlexWrapper>
            </FlexWrapper>
        </GeneralFormFileSection>
    );
};

const GeneralFormFileSection = styled.section`
  margin-top: 70px;

  @media screen and (max-width: 1209px) {
    ${FlexWrapper} {
      flex: 1 0 100%;
    }
  }

`
