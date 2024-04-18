import React from 'react';
import styled from "styled-components";
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
    iconHeight: number;
    iconWidth: number;
    services: { name: string; iconId: boolean; color: string }[];
};

export const Price = () => {
    const { themeobj } = useTheme();

    const itemsData: itemType[] = [
        {
            title: "silver",
            price: "$0.00",
            span: "/hour",
            description: "For most businesses that want to optimize web queries",
            iconId: true,
            iconHeight: 12,
            iconWidth: 18,
            services: [
                { name: 'ui design', iconId: true, color: themeobj.colors.headerText },
                { name: 'web development', iconId: true, color: themeobj.colors.headerText },
                { name: 'logo design', iconId: false, color: themeobj.colors.mainText },
                { name: 'seo optimization', iconId: false, color: themeobj.colors.mainText },
                { name: 'wordPress integration', iconId: false, color: themeobj.colors.mainText },
                { name: '5 Websites', iconId: false, color: themeobj.colors.mainText },
                { name: 'unlimited user', iconId: false, color: themeobj.colors.mainText },
                { name: '20 gB bandwith', iconId: false, color: themeobj.colors.mainText }
            ]
        },
        {
            title: "gold",
            price: "$50.00",
            span: "/hour",
            description: "For most businesses that want to optimize web queries",
            iconId: false,
            iconHeight: 12,
            iconWidth: 18,
            services: [
                { name: 'ui design', iconId: true, color: themeobj.colors.headerText },
                { name: 'web development', iconId: true, color: themeobj.colors.headerText },
                { name: 'logo design', iconId: true, color: themeobj.colors.headerText },
                { name: 'seo optimization', iconId: true, color: themeobj.colors.headerText },
                { name: 'wordPress integration', iconId: false, color: themeobj.colors.mainText },
                { name: '5 Websites', iconId: false, color: themeobj.colors.mainText },
                { name: 'unlimited user', iconId: false, color: themeobj.colors.mainText },
                { name: '20 gB bandwith', iconId: false, color: themeobj.colors.mainText }
            ]
        },
        {
            title: "diamond",
            price: "$80.00",
            span: "/hour",
            description: "For most businesses that want to optimize web queries",
            iconId: true,
            iconHeight: 12,
            iconWidth: 18,
            services: [
                { name: 'ui design', iconId: true, color: themeobj.colors.headerText },
                { name: 'web development', iconId: true, color: themeobj.colors.headerText },
                { name: 'logo design', iconId: true, color: themeobj.colors.headerText },
                { name: 'seo optimization', iconId: true, color: themeobj.colors.headerText },
                { name: 'wordPress integration', iconId: true, color: themeobj.colors.headerText },
                { name: '5 Websites', iconId: true, color: themeobj.colors.headerText },
                { name: 'unlimited user', iconId: true, color: themeobj.colors.headerText },
                { name: '20 gB bandwith', iconId: true, color: themeobj.colors.headerText }
            ]
        }
    ];

    return (
        <Fade cascade damping={0.9}>
            <PriceSection>
                <BlockTitle title={'Price plans'}
                            subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'} />
                <PriceGridWrapper >
                    {itemsData.map((item, index) => (
                        <PriceCard
                            item={item}
                            key={index}
                        />
                    ))}
                </PriceGridWrapper>
            </PriceSection>
        </Fade>
    );
};


const PriceGridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  -webkit-column-gap: 20px;
  column-gap: 20px;
  row-gap: 20px;
  justify-items: center;

`

const PriceSection = styled.section``;
