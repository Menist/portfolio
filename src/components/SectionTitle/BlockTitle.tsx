import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {SectionTitle} from "./SectionTitle";
import {SectionSubTitle} from "./SectionSubTitle";

type BlockTitlePropsType={
    title:string
    subTitle:string
}
export const BlockTitle = (props:BlockTitlePropsType) => {
    return (
        <FlexWrapper  align={"center"} justify={"center"} direction={"column"} gap={"0"}>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionSubTitle>{props.subTitle}</SectionSubTitle>
        </FlexWrapper>
    );
};
