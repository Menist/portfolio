import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {Icon} from "./icon/Icon";
import {Link} from "react-scroll";
import 'animate.css';

type StraightButtonPropsType = {
    textBtn: string;
};

export const StraightLink = (props: StraightButtonPropsType) => {
    return (
            <Wrap>
                <Links
                    to={'contacts'}
                    spy={true}
                    smooth={true}
                >
                    {props.textBtn}
                    <Icon iconId={"arrow"} width={"10.67"} height={"10.37"} viewBox={"0 0 10.67 10.37"}/>
                </Links>
             </Wrap>

    );
};

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  
  @media screen and (max-width: 1156px) {
    justify-content: center;
  }
`
const Links = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 9px;
  background: ${theme.colors.link};
  padding: 16px 32px;
  color: ${theme.colors.headerText};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  border: 2px solid transparent;
  margin-bottom: 10px;
  transition: .3s;
  align-self: flex-start;

  &:hover {
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.background};
    transition: ${theme.animation.transitionBackground};
  }

  @media screen and (max-width: 1156px) {
    align-self: center;
  }
`;
