import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { PriceCard } from "./PriceCard/PriceCard";
import { BlockTitle } from "../../../components/SectionTitle/BlockTitle";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../../ThemeProvider";

export type itemType = {
    title: string;
    price: string;
    icon?: string;
    span: string;
    description: string;
    iconId?: boolean;
    iconHeight: string;
    iconWidth: string;
    services: { name: string; iconId: boolean; color: string }[];
};

export const Price = () => {
    const { themeObj } = useTheme();

    const itemsData: itemType[] = [
        {
            title: "silver",
            price: "$0.00",
            span: "/hour",
            description: "For most businesses that want to optimize web queries",
            iconId: true,
            iconHeight: "12.020996",
            iconWidth: "17.596924",
            services: [
                { name: 'ui design', iconId: true, color: themeObj.colors.headerText },
                { name: 'web development', iconId: true, color: themeObj.colors.headerText },
                { name: 'logo design', iconId: false, color: themeObj.colors.mainText },
                { name: 'seo optimization', iconId: false, color: themeObj.colors.mainText },
                { name: 'wordPress integration', iconId: false, color: themeObj.colors.mainText },
                { name: '5 Websites', iconId: false, color: themeObj.colors.mainText },
                { name: 'unlimited user', iconId: false, color: themeObj.colors.mainText },
                { name: '20 gB bandwith', iconId: false, color: themeObj.colors.mainText }
            ]
        },
        {
            title: "gold",
            price: "$50.00",
            span: "/hour",
            description: "For most businesses that want to optimize web queries",
            iconId: false,
            iconHeight: "12.020996",
            iconWidth: "17.596924",
            services: [
                { name: 'ui design', iconId: true, color: themeObj.colors.headerText },
                { name: 'web development', iconId: true, color: themeObj.colors.headerText },
                { name: 'logo design', iconId: true, color: themeObj.colors.headerText },
                { name: 'seo optimization', iconId: true, color: themeObj.colors.headerText },
                { name: 'wordPress integration', iconId: false, color: themeObj.colors.mainText },
                { name: '5 Websites', iconId: false, color: themeObj.colors.mainText },
                { name: 'unlimited user', iconId: false, color: themeObj.colors.mainText },
                { name: '20 gB bandwith', iconId: false, color: themeObj.colors.mainText }
            ]
        },
        {
            title: "diamond",
            price: "$80.00",
            span: "/hour",
            description: "For most businesses that want to optimize web queries",
            iconId: true,
            iconHeight: "12.020996",
            iconWidth: "17.596924",
            services: [
                { name: 'ui design', iconId: true, color: themeObj.colors.headerText },
                { name: 'web development', iconId: true, color: themeObj.colors.headerText },
                { name: 'logo design', iconId: true, color: themeObj.colors.headerText },
                { name: 'seo optimization', iconId: true, color: themeObj.colors.headerText },
                { name: 'wordPress integration', iconId: true, color: themeObj.colors.headerText },
                { name: '5 Websites', iconId: true, color: themeObj.colors.headerText },
                { name: 'unlimited user', iconId: true, color: themeObj.colors.headerText },
                { name: '20 gB bandwith', iconId: true, color: themeObj.colors.headerText }
            ]
        }
    ];

    return (
        <Fade cascade damping={0.9}>
            <PriceSection>
                <BlockTitle title={'Price plans'}
                            subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {itemsData.map((item, index) => (
                        <PriceCard
                            item={item}
                            key={index}
                        />
                    ))}
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
`;
