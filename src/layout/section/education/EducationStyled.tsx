import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../../styles/Theme";
import {useTheme} from "../../../ThemeProvider";


type EducationStyledComponentPropsType = {
    firstTitle: string
    subTitle: string
    data: string
    secondTitle: string
    text: string
}
export const EducationStyled = (props: EducationStyledComponentPropsType) => {
    const { theme } = useTheme();

    return (
            <EducationStyledComponent theme={theme}>
                <Fade cascade damping={.5}>

                <FlexWrapper align={'flex-start'} gap={"12%"}>
                    <FlexWrapper flex={"0 1 25%"} gap={"25px"}>
                        <FirstTitleEducation>{props.firstTitle}</FirstTitleEducation>
                        <SubTitleTitleEducation>{props.subTitle}</SubTitleTitleEducation>
                        <EducationData>{props.data}</EducationData>
                    </FlexWrapper>
                    <FlexWrapper flex={"0 1 63%"} gap={"20px 0"}>
                        <SecondTitleEducation>{props.secondTitle}</SecondTitleEducation>
                        <TextEducation>{props.text}</TextEducation>
                    </FlexWrapper>
                </FlexWrapper>
                </Fade>

            </EducationStyledComponent>
    );
};

const EducationStyledComponent = styled.div`
  background-color: ${({ theme }) => theme === 'dark' ? '#1E1E1E' : '#FFFFFF'};
  padding: 37px 29px 30px 38px;

  border-bottom: 1px solid  ${({ theme }) => theme === 'dark' ? '#1E1E1E' : '#FFFFFF'};;

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
const FirstTitleEducation = styled.h4`
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
  color: ${theme.colors.headerText};
  gap: 25px;
`
const SubTitleTitleEducation = styled.span`
  font-weight: 500;
`
const EducationData = styled.span`
  font-weight: 400;
  font-size: 10px;
  color: ${theme.colors.background};
  background-color: ${theme.colors.primary};
  padding: 5px 10px;
`
const SecondTitleEducation = styled(FirstTitleEducation)``
const TextEducation = styled.div`
  padding-bottom: 30px;
  max-width: 720px;
  line-height: 24px;
`
