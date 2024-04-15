import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../ThemeProvider";
import {ThemeObjectType} from "../../../styles/ColorSheme";


type EducationStyledComponentPropsType = {
    infoTitle: string
    infoSubTitle: string
    infoData: string
    descriptionTitle: string
    descriptionText: string
}
export const EducationStyled = (props: EducationStyledComponentPropsType) => {
    const {themeObj} = useTheme();

    return (
        <EducationStyledComponent themeObj={themeObj}>
            <Fade cascade damping={.5}>
                <FlexWrapper align={'flex-start'} gap={"12%"}>
                    <FlexWrapper flex={"0 1 25%"} gap={"25px"}>
                        <EducationInfoTitle themeObj={themeObj}>{props.infoTitle}</EducationInfoTitle>
                        <EducationInfoSubTitle>{props.infoSubTitle}</EducationInfoSubTitle>
                        <EducationInfoData themeObj={themeObj}>{props.infoData}</EducationInfoData>
                    </FlexWrapper>
                    <FlexWrapper flex={"0 1 63%"} gap={"20px 0"}>
                        <EducationDescriptionTitle themeObj={themeObj}>{props.descriptionTitle}</EducationDescriptionTitle>
                        <EducationDescriptionText>{props.descriptionText}</EducationDescriptionText>
                    </FlexWrapper>
                </FlexWrapper>
            </Fade>
        </EducationStyledComponent>
    );
};

const EducationStyledComponent = styled.div<{themeObj: ThemeObjectType}>`
  background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
  padding: 37px 29px 30px 38px;
  border-bottom:1px solid ${({themeObj}) =>themeObj.colors.backgroundWebsite};
  
  @media screen and (max-width: 1300px) {
    ${FlexWrapper} {
      gap: 20px;
    }

    ${FlexWrapper} {
      @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  }
  
  @media screen and (max-width: 1300px) {
    padding: 20px 20px;
  }
  @media screen and (max-width: 885px) {
    max-width: 60%;
    margin: 0 auto;
  }
  @media screen and (max-width: 720px) {
    max-width: 80%;
  }
  @media screen and (max-width: 596px) {
    max-width: 100%;
  }
`

const EducationInfoTitle = styled.h4<{themeObj: ThemeObjectType}>`
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
  color:${({themeObj}) =>themeObj.colors.headerText};
  gap: 25px;
`
const EducationInfoSubTitle = styled.span`
  font-weight: 500;
`
const EducationInfoData = styled.span<{themeObj: ThemeObjectType}>`
  font-weight: 400;
  font-size: 10px;
  background-color: ${({themeObj}) =>themeObj.colors.backgroundColorSection};
  
  background-color: ${({themeObj}) =>themeObj.colors.primary};
  padding: 5px 10px;
`
const EducationDescriptionTitle = styled(EducationInfoTitle)``
const EducationDescriptionText = styled.div`
  padding-bottom: 30px;
  max-width: 720px;
  line-height: 24px;
`
