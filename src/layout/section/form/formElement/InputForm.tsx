import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {useTheme} from "../../../../ThemeProvider";

type InputFormPropsType={
    labelName:string
    placeholder:string
    id:string
    type:string
    children?: React.ReactNode;
    name: string
}


export const InputFragment = (props:InputFormPropsType) => {
    const { theme } = useTheme();


    return (
        <InputForm >
            <Label id={props.id}>{props.labelName}</Label>
            <Input name={props.name} type={props.type} placeholder={props.placeholder} id={props.id} theme={theme} />
            {props.children}
        </InputForm>
    );
};
const InputForm=styled.div`
`
const Label = styled.label`
  display: inline-block;
  font-size: 18px;
  width: 100%;
  padding: 20px 0 10px 0;
`
const Input = styled.input`
  outline-color: ${theme.colors.mainText};
  width: 100%;
  min-height: 50px;
  background-color: ${({ theme }) => theme === 'dark' ? '#1E1E1E' : '#F0F0F6'};
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