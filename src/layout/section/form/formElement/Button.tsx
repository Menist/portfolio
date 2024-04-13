import styled, {ThemedStyledFunction} from "styled-components";
import {ThemeObjectType} from "../../../../styles/ColorSheme";
import {ComponentPropsWithoutRef, FC, forwardRef, ReactNode} from "react";
import {useTheme} from "../../../../ThemeProvider";

type ButtonProps =  {children: ReactNode} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { meow } = useTheme();
    return <ButtonStyled ref={ref} meow={meow}{...props}/>
})
export const ButtonStyled = styled.button<{meow:ThemeObjectType}>`
  padding: 9px 25px;
  background-color: ${({meow}) =>meow.colors.primary};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 25px;
  max-width: 200px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({meow}) =>meow.colors.primary};
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
    transition: ${({meow}) =>meow.animation.transitionBackground};
  }
}
`