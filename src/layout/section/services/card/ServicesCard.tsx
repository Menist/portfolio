import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {CardLink} from "../../../../components/Link";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

type ServicesCardPropsType = {
    iconId: string
    text: string
    title: string
    link: string
}
export const ServicesCard = (props: ServicesCardPropsType) => {
    const { themeObj } = useTheme();
    return (
        <ServicesCardStyled themeObj ={themeObj }>
            <Fade cascade damping={.2}>
            {props.iconId && <Icon iconId={props.iconId} height={"75"} width={"75"} viewBox={"0 0 75 75"}/>}
            <ServicesCardTitle>{props.title}</ServicesCardTitle>
            <ServicesCardText>{props.text}</ServicesCardText>
            {props.link && <CardLink link={"order now"}></CardLink>}
            </Fade>
        </ServicesCardStyled>

    );
};

const ServicesCardStyled = styled.div<{themeObj: ThemeObjectType}>`
  padding: 30px 25px 33px;
  background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
  display: flex;
  flex-direction: column;
  flex: 0 0 31.9%;
  align-items: center;
  text-transform: capitalize;
  max-width: 310px;

  a {
    text-transform: uppercase;
    font-size: 12px;
  }
  
  @media screen and (max-width: 969px) {
    width: 100%;
    max-width: 350px;
  }
`
const ServicesCardTitle = styled.h4`
  font-weight: 500;
  padding: 22px 0 20px;
`
const ServicesCardText = styled.p`
`
