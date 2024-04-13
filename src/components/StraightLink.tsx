import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {Icon} from "./icon/Icon";
import {Link} from "react-scroll";
import 'animate.css';
import { useTheme } from '../ThemeProvider';
import {ThemeObjectType} from "../styles/ColorSheme";

type StraightButtonPropsType = {
    textBtn: string;
};

export const StraightLink = (props: StraightButtonPropsType) => {
    const { meow } = useTheme();
    return (
            <Wrap meow={meow}>
                <Links
                    to={'contacts'}
                    spy={true}
                    smooth={true}
                    meow={meow}
                >
                    {props.textBtn}
                    <Icon iconId={"arrow"} width={"10.67"} height={"10.37"} viewBox={"0 0 10.67 10.37"}/>
                </Links>
             </Wrap>

    );
};

const Wrap = styled.div<{meow: ThemeObjectType}>`
  display: flex;
  cursor: pointer;
  
  @media screen and (max-width: 1156px) {
    justify-content: center;
  }
`
const Links = styled(Link)<{meow: ThemeObjectType}>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 9px;
  background: ${({meow}) =>meow.colors.link};
  padding: 16px 32px;
  color: ${({meow}) =>meow.colors.headerText};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  border: 2px solid transparent;
  margin-bottom: 10px;
  transition: .3s;
  align-self: flex-start;

  &:hover {
    border: 2px solid ${({meow}) =>meow.colors.primary};
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
    transition: ${({meow}) =>meow.animation.transitionBackground};
  }

  @media screen and (max-width: 1156px) {
    align-self: center;
  }
`;
