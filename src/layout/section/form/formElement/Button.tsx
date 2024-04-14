import styled from "styled-components";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {ComponentPropsWithoutRef, FC, forwardRef, ReactNode} from "react";
import {useTheme} from "../../../../ThemeProvider";

type ButtonProps =  {children: ReactNode} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { themeObj } = useTheme();
    return <ButtonStyled ref={ref} themeObj={themeObj}{...props}/>
})
export const ButtonStyled = styled.button<{themeObj:ThemeObjectType}>`
  padding: 9px 25px;
  background-color: ${({themeObj}) =>themeObj.colors.primary};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 25px;
  max-width: 200px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({themeObj}) =>themeObj.colors.primary};
    background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
    transition: ${({themeObj}) =>themeObj.animation.transitionBackground};
  }
}
`