import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../ThemeProvider";
import {ThemeObjectType} from "../../styles/ColorSheme";

const items = [
    {
        title: 'Services',
        href: 'services'
    },
    {
        title: 'Education',
        href: 'education'
    },
    {
        title: 'Portfolio',
        href: 'portfolio'
    },
    {
        title: 'Blog',
        href: 'blog'
    },
    {
        title: 'Contacts',
        href: 'contacts'
    }
]
export const Menu = () => {
    const { themeObj } = useTheme();

    return (
        <Fade cascade damping={.3}>
        <StyledMenu themeObj={themeObj}>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>
                        <MenuLink
                            smooth={true}
                            to={item.href}
                            activeClass="active"
                            spy={true}
                        >
                            {item.title}
                        </MenuLink>
                    </li>
                })}
            </ul>
        </StyledMenu>
        </Fade>
    );
};

const MenuLink = styled(Link)``
 const StyledMenu = styled.nav<{themeObj: ThemeObjectType}>
     `
       
  text-transform: capitalize;

  ul {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    font-size: 18px;

    &:hover, &.active {
      border-bottom-color: ${({themeObj}) =>themeObj.colors.primary};
    }

    @media screen and (max-width: 820px) {
      font-size: 15px;
    }
    @media screen and (max-width: 800px) {
      font-size: 18px;
    }
  }

  a {
    color: ${({themeObj}) =>themeObj.colors.primary};
    position: relative;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({themeObj}) =>themeObj.colors.primary};
      transition: ${({themeObj}) =>themeObj.animation.transitionWidth};
    }

    &:hover:after {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    ul {
      display: block;
      align-items: center;
      justify-content: center;
      font-size: xx-large;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      transition: .25s 0s ease-in-out;

      &:hover {
        border-bottom-color: ${({themeObj}) =>themeObj.colors.primary};
      }

      li {
        padding-top: 10px;
      }
    }
  }
`