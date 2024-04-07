import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <FooterSection>
            <p><span>&#169;</span>2021 All Rights Reserved.Ojjomedia</p>
        </FooterSection>
    );
};
const FooterSection=styled.footer`
  p{
    color: ${theme.colors.headerText};
    background-color: ${theme.colors.background};
    padding-top: 18px;
    padding-bottom: 18px;

    text-align: center;
  }

  span {
    color: black;
    padding-right: 25px;
  }
  @media screen and (max-width: 1091px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 65px;
  }
`
