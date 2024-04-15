import React from 'react';
import styled from "styled-components";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

type InputFormPropsType={
    inputLabelName:string
    inputPlaceholder:string
    inputId:string
    inputType:string
    children?: React.ReactNode;
    inputName: string
}


export const InputFragment = (props:InputFormPropsType) => {
    const { themeObj } = useTheme();

    return (
        <InputForm>
            <InputLabel id={props.inputId}>{props.inputLabelName}</InputLabel>
            <Input name={props.inputName} type={props.inputType} placeholder={props.inputPlaceholder} id={props.inputId} themeObj={themeObj} />
            {props.children}
        </InputForm>
    );
};
const InputForm=styled.div`
`
const InputLabel = styled.label`
  display: inline-block;
  font-size: 18px;
  width: 100%;
  padding: 20px 0 10px 0;
`
const Input = styled.input <{themeObj: ThemeObjectType}>`
  padding-left: 10px;
  font-family: 'Inter', sans-serif;
  outline-color: ${({themeObj}) =>themeObj.colors.mainText};
  color: ${({themeObj}) =>themeObj.colors.mainText};
  width: 100%;
  min-height: 50px;
  background-color: ${({themeObj}) =>themeObj.colors.backgroundWebsite};
  border: none;
  
  &:not(:focus)::placeholder{
    opacity: 1;
    transition: opacity .7s ease;
  }
  
  &::placeholder{
    padding-left: 10px;
    font-family: "Inter", sans-serif;
    opacity: 0;
    transition: opacity .5s ease;
  }
`