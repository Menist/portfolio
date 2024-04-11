import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {useTheme} from "../../../../ThemeProvider";

type InputFormPropsType={
    labelName:string
    placeholder:string
    id:string
    children?: React.ReactNode;
    name: string;
}
export const TextareaStyled = (props: InputFormPropsType) => {
    const { theme } = useTheme();

    return (
        <TextareaForm>
            <Label id={props.id}>{props.labelName}</Label>
            <Textarea required name={props.name} placeholder={props.placeholder} id={props.id} theme={theme}/>
            {props.children}
        </TextareaForm>
    );
};
const Label = styled.label`
  display: inline-block;
  width: 100%;
  padding: 20px 0 10px 0;
`
const Textarea = styled.textarea`
  width: 100%;
  min-height: 210px;
  resize: none;
  //background-color:#F0F0F6;
  background-color: ${({ theme }) => theme === 'dark' ? '#1E1E1E' : '#F0F0F6'};
  border: none;
  outline-color: ${theme.colors.mainText};
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