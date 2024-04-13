import React from 'react';
import iconsSprite from '../../assets/img/icon/iconsSprite.svg'
import {useTheme} from "../../ThemeProvider";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    color?: string
    fill?: string
}
export const Icon = (props: IconPropsType) => {
    const { meow } = useTheme();
    return (
        <svg width={props.width || "74"} height={props.height || "74"}
             viewBox={`0 0 ${props.width || '74'} ${props.height || '74'}`}
             color={props.color || meow.colors.primary}
             fill={props.fill || meow.colors.primary}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

