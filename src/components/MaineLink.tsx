import React from 'react';
import styled from "styled-components";
import {Icon} from "./icon/Icon";
import {Link} from "react-scroll";
import 'animate.css';
import { useTheme } from '../ThemeProvider';
import {ThemeObjectType} from "../styles/ColorSheme";

type StraightButtonPropsType = {
    textBtn: string;
};

export const MaineLink = (props: StraightButtonPropsType) => {
    const { themeObj } = useTheme();
    return (
            <MaineLinkStyled themeObj={themeObj}>
                <Links
                    to={'contacts'}
                    spy={true}
                    smooth={true}
                    themeObj={themeObj}
                >
                    {props.textBtn}
                    <Icon iconId={"arrow"} color={'currentColor'} width={"10.67"} height={"10.37"} viewBox={"0 0 10.67 10.37"}/>
                </Links>
             </MaineLinkStyled>

    );
};

const MaineLinkStyled = styled.div<{themeObj: ThemeObjectType}>`
  display: flex;
  cursor: pointer;
  
  @media screen and (max-width: 1156px) {
    justify-content: center;
  }
`
const Links = styled(Link)<{themeObj: ThemeObjectType}>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 9px;
  background: ${({themeObj}) =>themeObj.colors.link};
  padding: 16px 32px;
  color: ${({themeObj}) =>themeObj.colors.headerText};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  border: 2px solid transparent;
  margin-bottom: 10px;
  transition: .3s;
  align-self: flex-start;

  &:hover {
    border: 2px solid ${({themeObj}) =>themeObj.colors.primary};
    background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
    transition: ${({themeObj}) =>themeObj.animation.transitionBackground};
  }

  @media screen and (max-width: 1156px) {
    align-self: center;
  }
`;
