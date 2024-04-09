import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const items = [
    {
        title: 'Contrast',
        href: '#',
        iconId:'navBarContrast',
        iconIdWidth:'30px',
        iconIdHeight:'30px'
    },
    {
        title: 'Home',
        href: 'home',
        iconId:'navBarHome',
        iconIdWidth:'40px',
        iconIdHeight:'40px'
    },
    {
        title: 'Service',
        href: 'services',
        iconId:'navBarService',
        iconIdWidth:'40px',
        iconIdHeight:'40px'
    },
    {
        title: 'Education',
        href: 'education',
        iconId:'navBarEducation',
        iconIdWidth:'40px',
        iconIdHeight:'40px'
    },
    {
        title: 'Portfolio',
        href: 'portfolio',
        iconId:'navBarPortfolio',
        iconIdWidth:'40px',
        iconIdHeight:'40px'
    },
    {
        title: 'Blog',
        href: 'blog',
        iconId:'navBarBlog',
        iconIdWidth:'40px',
        iconIdHeight:'40px'
    },
    {
        title: 'Contact',
        href: 'contacts',
        iconId:'navBarContact',
        iconIdWidth:'40px',
        iconIdHeight:'40px'
    }
]
export const NavBar = () => {
    return (
        <Nav>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>
                        <MenuLink
                            smooth={true}
                            to={item.href}
                            activeClass="active"
                            spy={true}
                        >
                                <LinkItem  title={item.title}>
                                    <Icon iconId={item.iconId} width={item.iconIdWidth} height={item.iconIdWidth} fill={"#F0F0F6"}/>
                                </LinkItem>
                        </MenuLink>
                    </li>
                })}
            </ul>
        </Nav>
    );
};

const MenuLink = styled(Link)``

const Nav = styled.nav`
  position: fixed;
  right: 0;
  z-index: 100;
  min-width: 108px;
  background-color: #fafafa;
  padding: 50px 22px 10px 25px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  ul li:first-child {
    margin-bottom: 125px;
    a div {
      &:hover::after {
        bottom: 54px;
      }
    }
  }

  ul li {
    margin-bottom: 45px;
  }


  @media screen and (max-width: 1091px) {
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.mainText};
    width: 100%;
    height: auto;
    padding: 20px 0;

    ul {
      display: flex;
      gap: 45px;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      li {
        margin-bottom: 0;
      }

      li:first-child {
        margin-bottom: 0;
        a div {
          &:hover::after {
            bottom: 54px;
          }
        }
      }

      a {
        &:first-child {
          margin-bottom: 0;
        }
      }
    }

    @media screen and (max-width: 570px) {
      ul {
        gap: 30px;
      }

      li:first-child {
        display: none;
      }
    }
    @media screen and (max-width: 425px) {
      padding: 10px 0;
      ul {
        gap: 10px;
      }
    }
  }
`
const LinkItem = styled.div`
  position: relative;

  svg {
    color: ${theme.colors.primary};
    transition: ${theme.animation.transitionAll};
  }

  &:hover svg {
    fill: currentColor;
    transform: scale(1.3);
    transition: ${theme.animation.transitionAll};
  }

  &:hover::after {
    content: attr(title);
    font-size: ${theme.text.textSize};
    font-weight: 500;
    position: absolute;
    bottom: 65px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.headerText};
    color: ${theme.colors.background};
    padding: 5px 15px;
    border-radius: 3px;
    white-space: nowrap;
  }

  &:hover::before {
    content: '';
    position: absolute;
    bottom: 120%;
    left: 25%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 13px solid ${theme.colors.headerText};
  }
`;