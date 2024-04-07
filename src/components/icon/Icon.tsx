import React from 'react';
import iconsSprite from '../../assets/img/icon/iconsSprite.svg'
import {theme} from '../../styles/Theme';

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    color?: string
    fill?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "74.000000"} height={props.height || "74.000000"}
             viewBox={`0 0 ${props.width || '74'} ${props.height || '74'}`}
             color={props.color || `${theme.colors.primary}`}
             fill={props.fill || `${theme.colors.primary}`
             }>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

