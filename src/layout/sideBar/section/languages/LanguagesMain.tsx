import React from 'react';
import styled from "styled-components";
import {LanguagesFragment} from "./LanguagesFragment";
import {SidebarTitle} from "../../../../components/SidebarTitle";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
export const LanguagesMain = () => {
    const { meow } = useTheme();
    return (
        <LanguagesMainStyled meow={meow}>
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
        </LanguagesMainStyled>
    );
};
const LanguagesMainStyled = styled.div<{meow: ThemeObjectType}>`
  border-bottom: 1px solid ${({meow}) =>meow.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`