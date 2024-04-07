import React from 'react';
import styled from "styled-components";
import {LanguagesFragment} from "./LanguagesFragment";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {SidebarLine} from "../../../../components/SidebarLine";

export const LanguagesMain = () => {
    return (
        <LanguagesMainStyled>
            <SidebarTitle text={"Languages"}></SidebarTitle>
            <LanguagesFragment
                textTitle={"Bangla"}
                textProgress={"50%"}
                progress={"50%"}
            ></LanguagesFragment>
            <LanguagesFragment
                textTitle={"English"}
                textProgress={"0%"}
                progress={"0%"}
            ></LanguagesFragment>
            <LanguagesFragment
                textTitle={"Spanish"}
                textProgress={"20%"}
                progress={"20%"}
            ></LanguagesFragment>
            <SidebarLine></SidebarLine>
        </LanguagesMainStyled>
    );
};
const LanguagesMainStyled = styled.div``