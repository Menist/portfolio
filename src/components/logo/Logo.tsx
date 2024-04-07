import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <LogoHeader>
            <button onClick={()=>{scroll.scrollToTop()}}>
                <Icon iconId={'webDevelopment'} width={"68"} height={"68"} viewBox={"0 0 67 60"}/>
            </button>
        </LogoHeader>
    );
};
const LogoHeader = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
