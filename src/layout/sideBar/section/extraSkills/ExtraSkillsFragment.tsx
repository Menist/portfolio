import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ExtraSkillsFragmentPropsType = {
    text: string
}
export const ExtraSkillsFragment = (props: ExtraSkillsFragmentPropsType) => {
    return (
        <ExtraSkills>
            <FlexWrapper align={"center"} gap={"15px"}>
                <Icon iconId={"squareSidebar"} height={"15"} width={"15"}/>
                <ExtraSkillsText>{props.text}</ExtraSkillsText>
            </FlexWrapper>
        </ExtraSkills>
    );
};

const ExtraSkills = styled.div`
  padding-top: 15px;

`
const ExtraSkillsText = styled.div`
`