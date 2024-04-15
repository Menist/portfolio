import React from 'react';
import styled from "styled-components";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

type InputFormPropsType={
    labelName:string
    placeholder:string
    id:string
    children?: React.ReactNode;
    name: string;
}
export const TextareaStyled = (props: InputFormPropsType) => {
    const { themeObj } = useTheme();

    return (
        <TextareaForm>
            <Label id={props.id}>{props.labelName}</Label>
            <Textarea required name={props.name} placeholder={props.placeholder} id={props.id} themeObj={themeObj}/>
            {props.children}
        </TextareaForm>
    );
};
const Label = styled.label`
  display: inline-block;
  width: 100%;
  padding: 20px 0 10px 0;
`
const Textarea = styled.textarea<{themeObj: ThemeObjectType}>`
  font-family: 'Inter', sans-serif;
  padding-left: 10px;
  padding-top: 10px;
  color: ${({themeObj}) =>themeObj.colors.mainText};
  width: 100%;
  min-height: 210px;
  resize: none;
  background-color: ${({themeObj}) =>themeObj.colors.backgroundWebsite};
  border: none;
  outline-color: ${({themeObj}) =>themeObj.colors.mainText};
  &:not(:focus)::placeholder{
    opacity: 1;
    transition: opacity .7s ease;
  }
  &::placeholder{
    padding: 10px;
    font-family: "Inter", sans-serif;
    opacity: 0;
    transition: opacity .5s ease;
  }
`
const TextareaForm=styled.div`

`