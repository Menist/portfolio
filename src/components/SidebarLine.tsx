import React from 'react';
import styled from "styled-components";

export const SidebarLine = () => {
    return (
        <Line></Line>
    );
};
const Line=styled.div`
  &:after {
    content: "";
    display: block;
    background-color: #F0F0F6;
    height: 1px;
    margin: 25px 0;
  }
`