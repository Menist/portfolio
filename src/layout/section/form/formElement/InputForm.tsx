import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

type InputFormPropsType={
    labelName:string
    placeholder:string
    id:string
    type:string
    children?: React.ReactNode;
    name: string
}


export const InputFragment = (props:InputFormPropsType) => {
    const { meow } = useTheme();


    return (
        <InputForm >
            <Label id={props.id}>{props.labelName}</Label>
            <Input name={props.name} type={props.type} placeholder={props.placeholder} id={props.id} meow={meow} />
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
const Input = styled.input <{meow: ThemeObjectType}>`
  outline-color: ${({meow}) =>meow.colors.mainText};
  width: 100%;
  min-height: 50px;
  background-color: ${({meow}) =>meow.colors.backgroundWebsite};
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