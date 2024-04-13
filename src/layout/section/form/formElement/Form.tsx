import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Button} from "./Button";
import {InputFragment} from "./InputForm";
import {TextareaStyled} from "./Textarea";
import emailjs from '@emailjs/browser';
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

export const Form = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const { theme } = useTheme();
    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!form.current) return

        emailjs
            .sendForm('service_rfw61vs', 'template_wgtmyaf', form.current, {
                publicKey: '_MeZAJe4pjf1yoFxv',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };
    const { meow } = useTheme();
    return (

        <FlexWrapper flex={"0 0 55%"} minWidth={"300px"} gap={"0"}>
            <FormTitle>Leave us your info</FormTitle>
            <FormSection ref={form} onSubmit={sendEmail}>
                <FlexWrapperFlexWrapper meow={meow}>
                    <InputFragment
                        labelName={"Your Full Name (Required)"}
                        placeholder={"Your text"}
                        id={"name"}
                        type={"text"}
                        name={'full_name'}
                    >

                    </InputFragment>
                    <InputFragment
                        labelName={"Your Email (Required)"}
                        placeholder={"Your email"}
                        id={"email"}
                        type={"email"}
                        name={'email'}
                    >
                    </InputFragment>
                    <InputFragment
                        labelName={"Subject"}
                        placeholder={"Your text"}
                        id={"subject"}
                        type={"text"}
                        name={'subject'}
                    >
                    </InputFragment>
                    <TextareaStyled
                        labelName={"Your Message"}
                        placeholder={"Your Message"}
                        id={"textarea"}
                        name={'message'}
                    >
                    </TextareaStyled>
                    <Button type={"submit"}>send message</Button>
                </FlexWrapperFlexWrapper>
            </FormSection>
        </FlexWrapper>
    );
};

const FlexWrapperFlexWrapper = styled.div<{meow: ThemeObjectType}>`

  background-color: ${({meow}) =>meow.colors.backgroundColorSection};
  display: flex;
  flex-direction: column;
  padding: 25px 25px 25px 25px;
  gap: 10px;
`
const FormSection = styled.form`
  width: 100%;
`
const FormTitle = styled.h2`
  margin-bottom: 50px;
  text-transform: capitalize;

  @media screen and (max-width: 1209px) {
    width: 100%;
    text-align: center;
  }
`