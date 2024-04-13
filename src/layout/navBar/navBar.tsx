import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Link} from "react-scroll";
import {useTheme} from "../../ThemeProvider";
import {ThemeObjectType} from "../../styles/ColorSheme";

const items = [
    {
        title: 'Home',
        href: 'home',
        iconId: 'navBarHome',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Service',
        href: 'services',
        iconId: 'navBarService',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Education',
        href: 'education',
        iconId: 'navBarEducation',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Portfolio',
        href: 'portfolio',
        iconId: 'navBarPortfolio',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Blog',
        href: 'blog',
        iconId: 'navBarBlog',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    },
    {
        title: 'Contact',
        href: 'contacts',
        iconId: 'navBarContact',
        iconIdWidth: '40px',
        iconIdHeight: '40px'
    }
]
export const NavBar = () => {
    const {meow, toggleTheme} = useTheme();

    return (
        <Nav meow={meow}>

            <ul>
                <li>
                    <ToggleButton meow={meow} onClick={() => {
                        toggleTheme(meow === 'dark' ? 'light' : 'dark');
                    }}
                    ><Icon  iconId={'navBarContrast'} width={'30px'} height={'30px'} fill={"#F0F0F6"}/></ToggleButton>
                </li>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <MenuLink
                                smooth={true}
                                to={item.href}
                                activeClass="active"
                                spy={true}
                            >
                                <LinkItem meow={meow} title={item.title}>
                                    <Icon iconId={item.iconId} width={item.iconIdWidth} height={item.iconIdWidth}
                                          fill={"#F0F0F6"}/>
                                </LinkItem>
                            </MenuLink>
                        </li>
                    );
                })}
            </ul>
        </Nav>
    );
};

const MenuLink = styled(Link)``;

const Nav = styled.nav<{meow: ThemeObjectType}>`
  position: fixed;
  right: 0;
  z-index: 100;
  min-width: 108px;
  background-color: ${({meow}) =>meow.colors.backgroundColorSection};
  padding: 50px 22px 10px 25px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;

    li > div:hover::before {
      content: none;
    }

    li > div:hover::after {
      content: none;
    }
  }

  @media screen and (max-width: 1091px) {
    position: fixed;
    bottom: 0;
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
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
`;
const LinkItem = styled.div<{meow: ThemeObjectType}>`
  position: relative;
  cursor: pointer;

  svg {
    color: ${({meow}) =>meow.colors.primary};
    transition: all .3s ease;
  }

  &:hover svg {
    color: ${({meow}) =>meow.colors.primary};
    transform: scale(1.3);
    transition: all .3s ease;
  }

  &:hover::after {
    content: attr(title);
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    bottom: 65px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({meow}) =>meow.colors.backgroundColorSection};
    color: ${({meow}) =>meow.colors.backgroundColorSection};
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
    border-top: 13px solid ${({meow}) =>meow.colors.backgroundColorSection};
  }

`;
const ToggleButton = styled(LinkItem)<{meow: ThemeObjectType}>`
  margin: 50px 0 125px 0;
  text-align: center;

  svg {
    color: ${({meow}) =>meow.colors.primary};
    transition: all .3s ease;
  }

  @media screen and (max-width: 1091px) {
  margin: 0;
  }
`

