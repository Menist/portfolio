import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {PriceCard} from "./PriceCard/PriceCard";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import {Fade} from "react-awesome-reveal";

export const Price = () => {
    return (
        <Fade cascade damping={.9}>
        <PriceSection>
            <BlockTitle title={'Price plans'}
                        subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}></BlockTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                <PriceCard
                    name={"silver"}
                    price={"$0.00"}
                    span={"/hour"}
                    description={"For most businesses that want to\n" +
                        "optimize web queries"}
                    iconId={"selected"} height={"12.020996"} width={"17.596924"}
                    services={"UI Design"}
                />
                <PriceCard
                    name={"gold"}
                    span={"/hour"}
                    price={"$50.00"}
                    description={"For most businesses that want to\n" +
                        "optimize web queries"}
                    iconId={"noSelected"} height={"12.020996"} width={"17.596924"}
                    services={"UI Design"}
                />
                <PriceCard
                    name={"dimond"}
                    span={"/hour"}
                    price={"$80.00"}
                    description={"For most businesses that want to\n" +
                        "optimize web queries"}
                    iconId={"selected"} height={"12.020996"} width={"17.596924"}
                    services={"UI Design"}
                />
            </FlexWrapper>
        </PriceSection>
        </Fade>
    );
};
const PriceSection = styled.section`
  
  @media screen and (max-width: 1340px) {
    ${FlexWrapper}{
      justify-content: center;
    }
  }
  @media screen and (max-width: 943px) {
    ${FlexWrapper}{
      justify-content:center;
    }
  }
  }
  @media screen and (max-width: 636px) {
    ${FlexWrapper}{
      justify-content: center;
    }
  }
`