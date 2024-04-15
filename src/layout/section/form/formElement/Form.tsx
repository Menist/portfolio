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
    const { themeObj } = useTheme();
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
    return (

        <FlexWrapper flex={"0 0 55%"} minWidth={"300px"} gap={"0"}>
            <FormTitle>Leave us your info</FormTitle>
            <FormSection ref={form} onSubmit={sendEmail}>
                <FlexWrapperFlexWrapper themeObj={themeObj}>
                    <InputFragment
                        inputLabelName={"Your Full Name (Required)"}
                        inputPlaceholder={"Your text"}
                        inputId={"name"}
                        inputType={"text"}
                        inputName={'full_name'}
                    >
                    </InputFragment>
                    <InputFragment
                        inputLabelName={"Your Email (Required)"}
                        inputPlaceholder={"Your email"}
                        inputId={"email"}
                        inputType={"email"}
                        inputName={'email'}
                    >
                    </InputFragment>
                    <InputFragment
                        inputLabelName={"Subject"}
                        inputPlaceholder={"Your text"}
                        inputId={"subject"}
                        inputType={"text"}
                        inputName={'subject'}
                    >
                    </InputFragment>
                    <TextareaStyled
                        textareaLabelName={"Your Message"}
                        placeholder={"Your Message"}
                        id={"textarea"}
                        textareaName={'message'}
                    >
                    </TextareaStyled>
                    <Button type={"submit"}>send message</Button>
                </FlexWrapperFlexWrapper>
            </FormSection>
        </FlexWrapper>
    );
};

const FlexWrapperFlexWrapper = styled.div<{themeObj: ThemeObjectType}>`

  background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
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