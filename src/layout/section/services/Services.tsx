// Services.js
import React from 'react';
import styled from "styled-components";
import { ServicesCard } from "./card/ServicesCard";
import { BlockTitle } from "../../../components/SectionTitle/BlockTitle";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "../../../ThemeProvider";

const servicesData = [
    { iconId: "webDevelopment",
        title: "web development",
        text: "blog, e-commerce",
        link: ''
    },
    { iconId: "uIuxDesign",
        title: "uI/uX design",
        text: "Mobile app, website design",
        link: ''
    },
    { iconId: "soundDesign",
        title: "sound design",
        text: "Voice Over, Beat Making",
        link: ''
    },
    { iconId: "gameDesign",
        title: "game design",
        text: "Character Design, Props & Objects",
        link: ''
    },
    { iconId: "photography",
        title: "photography",
        text: "portrait, product photography",
        link: ''
    },
    { iconId: "",
        title: "advertising",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
        link: 'order now'
    }
];

export const Services = () => {
    const { themeobj } = useTheme();
    return (
        <Fade cascade damping={0.9}>
            <ServicesSection theme={themeobj} id={'services'}>
                <BlockTitle title={"my services"} subTitle={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"} />
                <Container>
                    {servicesData.map(service => (
                        <ServicesCard
                            key={service.title} // Уникальный ключ для каждой карточки
                            iconId={service.iconId}
                            title={service.title}
                            text={service.text}
                            link={service.link}
                        />
                    ))}
                </Container>
            </ServicesSection>
        </Fade>
    );
};

const ServicesSection = styled.section`
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(231px, 1fr));
  column-gap: 20px;
  row-gap: 20px;

  @media screen and (max-width: 969px) {
    justify-items: center;
  }
`;

