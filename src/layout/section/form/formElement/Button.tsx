import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const Button = styled.button`
  padding: 9px 25px;
  background-color: #FFB400;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 25px;
  max-width: 200px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover{
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.background};
    transition: ${theme.animation.transitionBackground};
  }
  }
`