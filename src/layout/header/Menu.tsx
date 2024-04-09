import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";
import {Fade} from "react-awesome-reveal";

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
    return (
        <Fade cascade damping={.3}>
        <StyledMenu>
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
 const StyledMenu = styled.nav`
  text-transform: capitalize;

  ul {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    font-size: 18px;

    &:hover, &.active {
      border-bottom-color: ${theme.colors.primary};
    }

    @media screen and (max-width: 820px) {
      font-size: 15px;
    }
    @media screen and (max-width: 800px) {
      font-size: 18px;
    }
  }

  a {
    color: ${theme.colors.primary};
    position: relative;
    cursor: pointer;

    &:after {
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.primary};
      content: "";
      transition: ${theme.animation.transitionWidth};
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
        border-bottom-color: ${theme.colors.primary};
      }

      li {
        padding-top: 10px;
      }
    }
  }
`