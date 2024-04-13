import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
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
    const { meow } = useTheme();

    return (
        <TextareaForm>
            <Label id={props.id}>{props.labelName}</Label>
            <Textarea required name={props.name} placeholder={props.placeholder} id={props.id} meow={meow}/>
            {props.children}
        </TextareaForm>
    );
};
const Label = styled.label`
  display: inline-block;
  width: 100%;
  padding: 20px 0 10px 0;
`
const Textarea = styled.textarea<{meow: ThemeObjectType}>`
  width: 100%;
  min-height: 210px;
  resize: none;
  background-color: ${({meow}) =>meow.colors.backgroundWebsite};
  border: none;
  outline-color: ${({meow}) =>meow.colors.mainText};
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