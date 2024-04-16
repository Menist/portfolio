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
                        CardTitle={"silver"}
                        CardPrice={"$0.00"}
                        CardSpan={"/hour"}
                        CardDescription={"For most businesses that want to\n" +
                            "optimize web queries"}
                        CardIconId={"selected"} CardIconHeight={"12.020996"} CardIconWidth={"17.596924"}
                        CardServices={"UI Design"}
                    />
                    <PriceCard
                        CardTitle={"gold"}
                        CardSpan={"/hour"}
                        CardPrice={"$50.00"}
                        CardDescription={"For most businesses that want to\n" +
                            "optimize web queries"}
                        CardIconId={"noSelected"} CardIconHeight={"12.020996"} CardIconWidth={"17.596924"}
                        CardServices={"UI Design"}
                    />
                    <PriceCard
                        CardTitle={"dimond"}
                        CardSpan={"/hour"}
                        CardPrice={"$80.00"}
                        CardDescription={"For most businesses that want to\n" +
                            "optimize web queries"}
                        CardIconId={"selected"} CardIconHeight={"12.020996"} CardIconWidth={"17.596924"}
                        CardServices={"UI Design"}
                    />
                </FlexWrapper>
            </PriceSection>
        </Fade>
    );
};
const PriceSection = styled.section`

  @media screen and (max-width: 1340px) {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
  @media screen and (max-width: 943px) {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
}

@media screen and (max-width: 636px) {
  ${FlexWrapper} {
    justify-content: center;
  }
}
`