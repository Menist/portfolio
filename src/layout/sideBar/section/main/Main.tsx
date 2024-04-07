import React from 'react';
import styled from "styled-components";
import img1 from '../../../../assets/img/section/sidebar/SidebarMain.webp'
import img1x from '../../../../assets/img/section@2x/sidebar/sidebarMain_@2x.webp'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SidebarIcon} from "./SidebarIcon";
import {SidebarLine} from "../../../../components/SidebarLine";

export const Main = () => {
    return (
        <SidebarMain>
            <FlexWrapper direction={"column"} align={"center"} padding={"0 0 25px 0"}>
                <SidebarMainImg></SidebarMainImg>
                <SidebarMainTitle>Rayan Adlardard</SidebarMainTitle>
                <SidebarMainSubtitle>Font-end Developer</SidebarMainSubtitle>
                <SidebarIcon></SidebarIcon>
            </FlexWrapper>
            <SidebarLine></SidebarLine>
        </SidebarMain>
    );
};
const SidebarMain = styled.div`
  //padding: 0;

`
const SidebarMainImg = styled.div`
  border-radius: 50%;
  min-width: 150px;
  min-height: 150px;
  object-fit: cover;
  position: relative;
  background-image: url(${img1});
  background-position: center;
  background-size: cover;

  @media (min-resolution: 2dppx) {
    background-image: ${`url(${img1x})`};
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #7EB942;
    bottom: 20px;
    right: 10px;
  }
`
const SidebarMainTitle = styled.h4`

`
const SidebarMainSubtitle = styled.p`

`
