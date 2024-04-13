import React from 'react';
import styled from "styled-components";
import {FlexWrapper, FlexWrapperStyled} from "../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../ThemeProvider";
import {themeNew, ThemeObjectType} from "../../../styles/ColorSheme";


type EducationStyledComponentPropsType = {
    firstTitle: string
    subTitle: string
    data: string
    secondTitle: string
    text: string
}
export const EducationStyled = (props: EducationStyledComponentPropsType) => {
    const {meow} = useTheme();

    return (
        <EducationStyledComponent meow={meow}>
            <Fade cascade damping={.5}>
                <FlexWrapper align={'flex-start'} gap={"12%"}>
                    <FlexWrapper flex={"0 1 25%"} gap={"25px"}>
                        <FirstTitleEducation meow={meow}>{props.firstTitle}</FirstTitleEducation>
                        <SubTitleTitleEducation>{props.subTitle}</SubTitleTitleEducation>
                        <EducationData meow={meow}>{props.data}</EducationData>
                    </FlexWrapper>
                    <FlexWrapper flex={"0 1 63%"} gap={"20px 0"}>
                        <SecondTitleEducation meow={meow}>{props.secondTitle}</SecondTitleEducation>
                        <TextEducation>{props.text}</TextEducation>
                    </FlexWrapper>
                </FlexWrapper>
            </Fade>
        </EducationStyledComponent>
    );
};

const EducationStyledComponent = styled.div<{meow: ThemeObjectType}>`
  background-color: ${({meow}) =>meow.colors.backgroundColorSection};
  padding: 37px 29px 30px 38px;
  border-bottom:1px solid ${({meow}) =>meow.colors.backgroundWebsite};
  
  @media screen and (max-width: 1300px) {
    ${FlexWrapperStyled} {
      gap: 20px;
    }

    ${FlexWrapperStyled} {
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

const FirstTitleEducation = styled.h4<{meow: ThemeObjectType}>`
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
  color:${({meow}) =>meow.colors.headerText};
  gap: 25px;
`
const SubTitleTitleEducation = styled.span`
  font-weight: 500;
`
const EducationData = styled.span<{meow: ThemeObjectType}>`
  font-weight: 400;
  font-size: 10px;
  background-color: ${({meow}) =>meow.colors.backgroundColorSection};
  
  background-color: ${({meow}) =>meow.colors.primary};
  padding: 5px 10px;
`
const SecondTitleEducation = styled(FirstTitleEducation)``
const TextEducation = styled.div`
  padding-bottom: 30px;
  max-width: 720px;
  line-height: 24px;
`
